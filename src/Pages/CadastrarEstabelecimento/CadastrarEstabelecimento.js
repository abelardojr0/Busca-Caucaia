import axios from "axios";
import React from "react";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import {
  Botao,
  ContainerFormulario,
  TituloFormulario,
} from "../Cadastro/StylesCadastro";

const CadastrarEstabelecimento = () => {
  const [categoria, setCategoria] = React.useState();
  const [nome, setNome] = React.useState();
  const [telefone, setTelefone] = React.useState();
  const [cep, setCep] = React.useState();
  const [numero, setNumero] = React.useState();
  const [imagem, setImagem] = React.useState();
  const [produtos, setProdutos] = React.useState();
  const [observacao, setObservacao] = React.useState();
  const rota = "http://localhost:5000";

  function finalizar(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoria", categoria);
    formData.append("nome", nome);
    formData.append("imagem", imagem);
    formData.append("telefone", telefone);
    formData.append("cep", cep);
    formData.append("numero", numero);
    formData.append("observacao", observacao);
    formData.append("produtos", produtos);
    console.log(imagem);
    axios
      .post(rota + "/inserirEstabelecimento", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleImageUpload(event) {
    const file = event.target.files[0];
    setImagem(file);
  }
  // function handleImageUpload(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImagem(reader.result);
  //   };
  // }
  return (
    <>
      <Header />
      <ContainerFormulario onSubmit={finalizar}>
        <TituloFormulario>Dados do Estabelecimento</TituloFormulario>
        <Input
          htmlFor={"categoria"}
          texto={"Categoria *"}
          tipo={"text"}
          nome={"categoria"}
          id={"categoria"}
          required={true}
          setDados={setCategoria}
          dados={categoria}
        />
        <Input
          htmlFor={"nome"}
          texto={"Nome *"}
          tipo={"text"}
          nome={"nome"}
          id={"nome"}
          required={true}
          setDados={setNome}
          dados={nome}
        />
        <Input
          htmlFor={"telefone"}
          texto={"Telefone *"}
          tipo={"text"}
          nome={"telefone"}
          id={"telefone"}
          required
          setDados={setTelefone}
          dados={telefone}
          telState={true}
        />
        <Input
          htmlFor={"cep"}
          texto={"CEP *"}
          tipo={"text"}
          nome={"cep"}
          id={"cep"}
          required
          setDados={setCep}
          dados={cep}
          cepState={true}
        />
        <Input
          htmlFor={"numero"}
          texto={"Número *"}
          tipo={"text"}
          nome={"numero"}
          id={"numero"}
          required
          setDados={setNumero}
          dados={numero}
        />
        <input type="file" onChange={handleImageUpload} />
        {imagem && <img src={imagem} alt="imagem" />}
        {/* <input
          tipo={"file"}
          nome={"imagem"}
          id={"imagem"}
          required
          onChange={handleImageUpload}
        /> */}
        {/* <Input
          htmlFor={"imagem"}
          texto={"Enviar Imagem"}
          tipo={"file"}
          nome={"imagem"}
          id={"imagem"}
          required
          setDados={setImagem}
          dados={imagem}
        /> */}

        <Input
          htmlFor={"observacao"}
          texto={"Observação"}
          tipo={"text"}
          nome={"observacao"}
          id={"observacao"}
          required
          setDados={setObservacao}
          dados={observacao}
        />

        <Input
          htmlFor={"produtos"}
          texto={"Produtos *"}
          tipo={"text"}
          nome={"produtos"}
          id={"produtos"}
          required
          setDados={setProdutos}
          dados={produtos}
        />
        <Botao>Cadastrar</Botao>
      </ContainerFormulario>
    </>
  );
};

export default CadastrarEstabelecimento;
