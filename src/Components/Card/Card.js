import React from "react";
import { useNavigate } from "react-router-dom";
import { CardComponent, CardImagem, CardTitulo } from "./StylesCard";

const Card = ({ id, nome, imagem }) => {
  const navigate = useNavigate();
  function abrirCategoria() {
    navigate(`/categoria/${id}?q=${nome}`);
  }
  return (
    <>
      <CardComponent onClick={abrirCategoria}>
        <CardImagem src={imagem} alt="imagem" />
        <CardTitulo>{nome}</CardTitulo>
      </CardComponent>
    </>
  );
};

export default Card;
