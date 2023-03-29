import React from "react";
import Categorias from "../../Components/Categorias/Categorias";
import Destaques from "../../Components/Destaques/Destaques";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Historia from "../../Components/Historia/Historia";
import Mapa from "../../Components/Mapa/Mapa";
import { HomeInfos } from "./StylesHome";

const Home = () => {
  return (
    <>
      <Header />
      <Destaques />
      <HomeInfos>
        <Historia />
        <Mapa />
      </HomeInfos>
      <Categorias />
      <Footer />
    </>
  );
};

export default Home;
