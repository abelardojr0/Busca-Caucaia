import React from "react";
import CardEstabelecimento from "../CardEstabelecimento/CardEstabelecimento";

import {
  ListaCardCardsContainer,
  ListaCardContainer,
  ListaCardDetalhes,
  ListaCardImagem,
  ListaCardInfos,
  ListaCardInfosContato,
  ListaCardInfosEndereco,
  ListaCardInfosHorario,
  ListaCardInfosItem,
  ListaCardInfosTitulo,
  ListaCardsBase,
  ListaCardTitulo,
} from "./StylesListaCard";
import mapa from "../../Images/mapa.png";
import local from "../../Images/local.png";
import relogio from "../../Images/relogio.png";
import tel from "../../Images/tel.png";

const ListaCards = ({ lista, titulo }) => {
  return (
    <>
      <ListaCardContainer>
        <ListaCardTitulo>{titulo}</ListaCardTitulo>
        <ListaCardCardsContainer>
          {lista &&
            lista.map((item) => (
              <>
                <ListaCardsBase>
                  {/* <CardEstabelecimento imagem={item[3]} /> */}
                  <ListaCardImagem src={item[3]} alt="imagem-logo" />
                  <ListaCardInfos>
                    <ListaCardInfosItem>
                      <img src={local} alt="local-icon" />
                      <ListaCardInfosTitulo>{item[2]}</ListaCardInfosTitulo>
                    </ListaCardInfosItem>

                    <ListaCardInfosItem>
                      <img src={mapa} alt="mapa-icon" />
                      <ListaCardInfosEndereco>{item[8]}</ListaCardInfosEndereco>
                    </ListaCardInfosItem>

                    <ListaCardInfosItem>
                      <img src={tel} alt="tel-icon" />
                      <ListaCardInfosContato>{item[4]}</ListaCardInfosContato>
                    </ListaCardInfosItem>

                    <ListaCardInfosItem>
                      <img src={relogio} alt="relogio-icon" />
                      <ListaCardInfosHorario>{item[7]}</ListaCardInfosHorario>
                    </ListaCardInfosItem>
                  </ListaCardInfos>
                  <ListaCardDetalhes>
                    Na Sorveteria Beijo Gelado em Caucaia produzimos um produto
                    de qualidade, com preço acessível. Venha saborear nossas
                    delícias! Sorvetes de frutas, cremosos e lights.
                  </ListaCardDetalhes>
                </ListaCardsBase>
              </>
            ))}
        </ListaCardCardsContainer>
      </ListaCardContainer>
    </>
  );
};

export default ListaCards;
