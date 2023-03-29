import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import CadastrarEstabelecimento from "./Pages/CadastrarEstabelecimento/CadastrarEstabelecimento";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/cadastrarEstabelecimento"
            element={<CadastrarEstabelecimento />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
