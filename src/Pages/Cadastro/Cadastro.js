import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import Footer from "../../Components/Footer/Footer";
import {
  Botao,
  BotaoFalso,
  CadastroMsgDeErro,
  ContainerFormulario,
  FormularioJaTenhoConta,
  FormularioJaTenhoContaTitulo,
  TituloFormulario,
} from "./StylesCadastro";

const Cadastro = () => {
  // const navigate = useNavigate();
  const [nome, setNome] = React.useState();
  const [email, setEmail] = React.useState();
  const [telefone, setTelefone] = React.useState();
  const [cep, setCep] = React.useState();
  const [endereco, setEndereco] = React.useState();
  const [bairro, setBairro] = React.useState();
  const [senha, setSenha] = React.useState();
  const [confirmarSenha, setConfirmarSenha] = React.useState();
  const [msgErroEmail, setMsgErroEmail] = React.useState(false);
  const [msgErroSenha, setMsgErroSenha] = React.useState(false);
  const [msgErroSenhaFraca, setMsgErroSenhaFraca] = React.useState(false);
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);
  const rota = "http://localhost:5000";

  function finalizar(e) {
    e.preventDefault();
    setMsgErroEmail(false);
    setMsgErroSenha(false);
    setMsgErroSenhaFraca(false);
    if (senha === confirmarSenha && msgErroEmail === false) {
      setCarregando(true);

      axios
        .post(rota + "/inserirUsuario", {
          nome,
          email,
          telefone,
          cep,
          endereco,
          bairro,
          senha,
        })
        .then((response) => {
          console.log(response);
          // if (response.data.status === "sucess") {
          //   console.log(response);
          //   // navigate(`/checarEmail?q=${email}`);
          // } else if (response.data.status === "fail") {
          //   setMsgErroEmail(true);
          //   setEmail("");
          // } else if (response.data.status === "senhaFraca") {
          //   setMsgErroSenhaFraca(true);
          //   setSenha("");
          //   setConfirmarSenha("");
          // }
          // setCarregando(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setMsgErroSenha(true);
      setCarregando(false);
    }
  }

  function abrirLogin() {
    if (loginStatus === true) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }
  return (
    <>
      <Header />
      {carregando && <p>carregando</p>}
      <ContainerFormulario></ContainerFormulario>
      <ContainerFormulario onSubmit={finalizar}>
        <TituloFormulario>Dados do cadastro</TituloFormulario>
        <Input
          htmlFor={"usuario"}
          texto={"Usuário *"}
          tipo={"text"}
          nome={"usuario"}
          id={"usuario"}
          required={true}
          setDados={setNome}
          dados={nome}
        />
        {msgErroEmail && (
          <CadastroMsgDeErro>Email já existe!</CadastroMsgDeErro>
        )}
        <Input
          htmlFor={"email"}
          texto={"Email *"}
          tipo={"email"}
          nome={"email"}
          id={"email"}
          required
          setDados={setEmail}
          dados={email}
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
          setBairro={setBairro}
          setEndereco={setEndereco}
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
        {msgErroSenhaFraca && (
          <CadastroMsgDeErro>
            Senha fraca, digite uma senha com no minimo um caracter maiúsculo,
            minúsculo, especial e um número
          </CadastroMsgDeErro>
        )}
        <Input
          htmlFor={"senha"}
          texto={"Senha *"}
          tipo={"password"}
          nome={"senha"}
          id={"senha"}
          required
          setDados={setSenha}
          dados={senha}
        />
        {msgErroSenha && (
          <CadastroMsgDeErro>Senhas não compativeis</CadastroMsgDeErro>
        )}
        <Input
          htmlFor={"confirmarSenha"}
          texto={"Confirmar senha *"}
          tipo={"password"}
          nome={"confirmarSenha"}
          id={"confirmarSenha"}
          required
          setDados={setConfirmarSenha}
          dados={confirmarSenha}
        />
        <Botao>Cadastrar</Botao>

        <FormularioJaTenhoConta>
          <FormularioJaTenhoContaTitulo>
            Já possui uma conta?
          </FormularioJaTenhoContaTitulo>
          <BotaoFalso onClick={abrirLogin}>Entrar</BotaoFalso>
        </FormularioJaTenhoConta>
      </ContainerFormulario>
      <Footer />
    </>
  );
};

export default Cadastro;
