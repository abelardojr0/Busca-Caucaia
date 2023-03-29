import React from "react";
import {
  HeaderComponent,
  HeaderLink,
  HeaderLogin,
  HeaderLoginBotao,
  HeaderLogo,
  HeaderNav,
  HeaderPesquisarBotao,
  HeaderPesquisarContainer,
  HeaderPesquisarContainerBarra,
  HeaderPesquisarInput,
} from "./StylesHeader";
import logo from "../../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../Pages/Login/Login";

const Header = () => {
  const inputRef = React.useRef(null);
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const [ativa, setAtiva] = React.useState("");
  const [inputVisivel, setInputVisivel] = React.useState(false);
  const [loginStatus, setLoginStatus] = React.useState(false);

  React.useEffect(() => {
    if (inputVisivel) {
      inputRef.current.focus();
    }
  }, [inputVisivel]);

  function pesquisar(e) {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  function mostrarPesquisa() {
    setAtiva("ativo");
    setInputVisivel(true);
  }

  function esconderPesquisa(e) {
    if (e.target.value.length > 0) {
      return;
    } else {
      setAtiva("");
      setInputVisivel(false);
    }
  }

  function abrirModalLogin() {
    if (loginStatus === true) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }
  return (
    <>
      {loginStatus && (
        <>
          <Login setLoginStatus={setLoginStatus} />
        </>
      )}
      <HeaderComponent>
        <HeaderNav>
          <Link to="/">
            <HeaderLogo src={logo} alt="logo" />
          </Link>
          <HeaderLink to="/">Inicio</HeaderLink>
          <HeaderLink>Categorias</HeaderLink>
          <HeaderLink>Anuncie Aqui</HeaderLink>
        </HeaderNav>
        <HeaderLogin>
          <HeaderPesquisarContainer onSubmit={pesquisar}>
            <HeaderPesquisarContainerBarra>
              <HeaderPesquisarInput
                autoFocus
                className={ativa}
                onBlur={esconderPesquisa}
                type={"text"}
                name={"pesquisar"}
                id={"pesquisar"}
                placeholder={"Buscar na Caucaia..."}
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value)}
                ref={inputRef}
                value={search}
              />
              <HeaderPesquisarBotao
                id="pesquisar_botao"
                onClick={mostrarPesquisa}
                type="submit"
              />
            </HeaderPesquisarContainerBarra>
          </HeaderPesquisarContainer>
          <HeaderLoginBotao onClick={abrirModalLogin}>Entrar</HeaderLoginBotao>
          <Link to="/cadastro">
            <HeaderLoginBotao>Cadastrar</HeaderLoginBotao>
          </Link>
        </HeaderLogin>
      </HeaderComponent>
    </>
  );
};

export default Header;
