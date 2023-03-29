import React from "react";
import { CardComponent, CardImagem, CardTitulo } from "./StylesCard";

const Card = ({ nome, imagem }) => {
  return (
    <>
      <CardComponent>
        <CardImagem src={imagem} alt="imagem" />
        <CardTitulo>{nome}</CardTitulo>
      </CardComponent>
    </>
  );
};

export default Card;
