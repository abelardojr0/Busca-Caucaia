import axios from "axios";
import React from "react";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import {
  Botao,
  ContainerFormulario,
  TituloFormulario,
} from "../Cadastro/StylesCadastro";
import {
  CadastrarEstabelecimentoFotoModelo,
  CadastrarEstabelecimentoInputFoto,
  CadastrarEstabelecimentoSelectCat,
} from "./StylesCadastrarEstabelecimento";

const CadastrarEstabelecimento = () => {
  const [categoria, setCategoria] = React.useState();
  const [listaCategorias, setListaCategorias] = React.useState([]);
  const [nome, setNome] = React.useState();
  const [telefone, setTelefone] = React.useState();
  const [cep, setCep] = React.useState();
  const [endereco, setEndereco] = React.useState();
  const [bairro, setBairro] = React.useState();
  const [numero, setNumero] = React.useState();
  const [imagem, setImagem] = React.useState();
  const [file, setFile] = React.useState();
  const [inicioSemana, setInicioSemana] = React.useState();
  const [fimSemana, setFimSemana] = React.useState();
  const [inicioHorario, setInicioHorario] = React.useState();
  const [fimHorario, setFimHorario] = React.useState();
  const [produtos, setProdutos] = React.useState();
  const [descricao, setDescricao] = React.useState();

  const diasSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
  const horarios = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const rota = "https://busca-caucaia-gules.vercel.app";

  React.useEffect(() => {
    axios
      .get(rota + "/categorias")
      .then((response) => {
        setListaCategorias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function finalizar(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoria", categoria);
    formData.append("nome", nome);
    formData.append("telefone", telefone);
    formData.append("cep", cep);
    formData.append("endereco", endereco);
    formData.append("bairro", bairro);
    formData.append("numero", numero);
    formData.append("imagem", file);
    formData.append("inicioSemana", inicioSemana);
    formData.append("fimSemana", fimSemana);
    formData.append("inicioHorario", inicioHorario);
    formData.append("fimHorario", fimHorario);
    formData.append("descricao", descricao);
    formData.append("produtos", produtos);
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
    setFile(file);
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagem(reader.result);
    };
  }
  function selecionarCategoria(e) {
    setCategoria(e.target.value);
  }
  function selecionarInicio(e) {
    setInicioSemana(e.target.value);
  }
  function selecionarFim(e) {
    setFimSemana(e.target.value);
  }
  function selecionarHorarioInicio(e) {
    setInicioHorario(e.target.value);
  }
  function selecionarHorarioFim(e) {
    setFimHorario(e.target.value);
  }
  return (
    <>
      <Header />
      <ContainerFormulario onSubmit={finalizar}>
        <TituloFormulario>Dados do Estabelecimento</TituloFormulario>
        <CadastrarEstabelecimentoSelectCat
          onChange={selecionarCategoria}
          required
        >
          <option value={""}>Selecione uma Categoria</option>
          {listaCategorias &&
            listaCategorias.map((item) => (
              <option value={item[0]}>
                {item[0]} - {item[1]}
              </option>
            ))}
        </CadastrarEstabelecimentoSelectCat>
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
          required={true}
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
          required={true}
          setDados={setCep}
          dados={cep}
          cepState={true}
        />
        <Input
          htmlFor={"endereco"}
          texto={"Endereço *"}
          tipo={"text"}
          nome={"endereco"}
          id={"endereco"}
          required
          setDados={setEndereco}
          dados={endereco}
        />
        <Input
          htmlFor={"bairro"}
          texto={"Bairro *"}
          tipo={"text"}
          nome={"bairro"}
          id={"bairro"}
          required
          setDados={setBairro}
          dados={bairro}
        />
        <Input
          htmlFor={"numero"}
          texto={"Número *"}
          tipo={"text"}
          nome={"numero"}
          id={"numero"}
          required={true}
          setDados={setNumero}
          dados={numero}
        />
        <CadastrarEstabelecimentoInputFoto
          type="file"
          name="file"
          id="file"
          onChange={handleImageUpload}
        />
        {imagem && (
          <CadastrarEstabelecimentoFotoModelo
            src={imagem}
            alt="imagem do estabelecimento"
          />
        )}
        <CadastrarEstabelecimentoSelectCat onChange={selecionarInicio} required>
          <option value={""}>Primeiro dia que o estabelecimento abre</option>
          {diasSemana &&
            diasSemana.map((item) => <option value={item}>{item}</option>)}
        </CadastrarEstabelecimentoSelectCat>
        <CadastrarEstabelecimentoSelectCat onChange={selecionarFim} required>
          <option value={""}>Último dia que o estabelecimento abre</option>
          {diasSemana &&
            diasSemana.map((item) => <option value={item}>{item}</option>)}
        </CadastrarEstabelecimentoSelectCat>

        <CadastrarEstabelecimentoSelectCat
          onChange={selecionarHorarioInicio}
          required
        >
          <option value={""}>Horário que abre</option>
          {horarios &&
            horarios.map((item) => <option value={item}>{item}</option>)}
        </CadastrarEstabelecimentoSelectCat>

        <CadastrarEstabelecimentoSelectCat
          onChange={selecionarHorarioFim}
          required
        >
          <option value={""}>Horário que fecha</option>
          {horarios &&
            horarios.map((item) => <option value={item}>{item}</option>)}
        </CadastrarEstabelecimentoSelectCat>

        <Input
          htmlFor={"descricao"}
          texto={"Descrição *"}
          tipo={"text"}
          nome={"descricao"}
          id={"descricao"}
          required
          setDados={setDescricao}
          dados={descricao}
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
