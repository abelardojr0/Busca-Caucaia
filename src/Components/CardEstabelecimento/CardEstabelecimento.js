import React from "react";
import {
  CardEstabelecimentoComponent,
  CardEstabelecimentoImagem,
} from "./StylesCardEstabelecimento";

const CardEstabelecimento = ({ imagem }) => {
  return (
    <>
      <CardEstabelecimentoComponent>
        <CardEstabelecimentoImagem src={imagem} alt="imagem" />
      </CardEstabelecimentoComponent>
    </>
  );
};

export default CardEstabelecimento;
