import psycopg2
from psycopg2 import Error
from flask import Flask, jsonify, request
from flask_cors import CORS
import dropbox
from dotenv import load_dotenv
load_dotenv()


try:
    con = psycopg2.connect(
        host="localhost",
        database="caucaia",
        user="postgres",
        password="postgres",
        port="5432"
    )
    

    app_key = 'e69bpyyy541vhxq'
    app_secret = 'g6vxv8d91osdlye'
    access_token = 'sl.Bbhyesr0DIerBUxJ1MSIXAT3qjk9Hr2vZ6aRwubcQz7pG4kaWNcpyMvK0mBre8-TJOgcFyDcTg_g63cVkz1D9Hd-Gc8cVcTjmtdGS16Myfl_WcIoxHFcHH2bUg9x51U-T-Q0qimFzXdp'
    client = dropbox.Dropbox(access_token)
    
    app = Flask(__name__)
    
    CORS(app)
    print("Conectado")   

    cur = con.cursor()

    @app.route('/inserirEstabelecimento', methods=['POST'])
    def inserir_estabelecimento():
        categoria = request.form['categoria']
        nome = request.form['nome']
        imagem = request.files['imagem']
        telefone = request.form['telefone']
        cep = request.form['cep']
        numero = request.form['numero']
        observacao = request.form['observacao']
        produtos = request.form['produtos']

        # Faça upload do arquivo para o Dropbox
        response = client.files_upload(imagem.read(), '/' + imagem.filename)

        # Recupere o URL público gerado pelo Dropbox
        settings = dropbox.sharing.SharedLinkSettings(requested_visibility=dropbox.sharing.RequestedVisibility.public)
        url = client.sharing_create_shared_link_with_settings(response.path_display, settings=settings).url
        url_final = url.replace('dl=0', 'raw=1')
        cur.execute("INSERT INTO estabelecimento (categoria_id, nome, imagem, telefone, cep, numero, observacao, produtos) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", (categoria, nome, url_final, telefone, cep, numero, observacao, produtos))
        con.commit()
        return jsonify({'status': 'success'})

    
    @app.route('/categorias', methods=['GET'])
    def categorias():
        cur = con.cursor()
        cur.execute(f"SELECT * FROM categoria")
        results = cur.fetchall()
        return jsonify(results)
    
    @app.route('/mercados', methods=['GET'])
    def mercados():
        cur = con.cursor()
        cur.execute(f"SELECT * FROM estabelecimento WHERE categoria_id = '3' ")
        results = cur.fetchall()
        return jsonify(results)
      
    @app.route('/inserirUsuario', methods=['POST'])
    def inserir_usuario():
        nome = request.json['nome']
        email = request.json['email']
        telefone = request.json['telefone']
        cep = request.json['cep']
        endereco = request.json['endereco']
        bairro = request.json['bairro']
        senha = request.json['senha']
        cur.execute("INSERT INTO usuario (nome, email, telefone, cep, endereco, bairro, senha) VALUES (%s, %s, %s, %s, %s, %s, %s)", (nome, email, telefone, cep, endereco, bairro, senha))
        con.commit()
        return jsonify({'status': 'success'})
    
        
    @app.route('/categoria/<int:id>', methods=['GET'])
    def get_categoria(id):
        cur = con.cursor()
        cur.execute(f"SELECT * FROM estabelecimento WHERE categoria_id = '{id}'")
        results = cur.fetchall()
        return jsonify(results)
    
    if __name__ == '__main__':
            app.run(debug=True)
        
except(Error) as error:
    print("Ocorreu um erro: ", error)