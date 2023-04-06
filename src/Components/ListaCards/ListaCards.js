import React from "react";

import {
  ListaCardAberto,
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
import calendario from "../../Images/calendario.png";
import moment from "moment";
// import queryString from "query-string";

const ListaCards = ({ lista, titulo }) => {
  const [horaAtual, setHoraAtual] = React.useState("");

  // function mapaPreview(address) {
  //   const queryParams = {
  //     center: address,
  //     zoom: 15,
  //     size: "400x400",
  //     markers: address,
  //   };
  //   const mapsUrl = `https://maps.googleapis.com/maps/api/staticmap?${queryString.stringify(
  //     queryParams
  //   )}`;
  //   return mapsUrl;
  // }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const horaAtual = moment().format("HH");
      setHoraAtual(horaAtual);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ListaCardContainer>
        <ListaCardTitulo>{titulo}</ListaCardTitulo>
        <ListaCardCardsContainer>
          {lista &&
            lista.map((item) => (
              <>
                <ListaCardsBase>
                  <ListaCardImagem src={item[3]} alt="imagem-logo" />
                  <ListaCardInfos>
                    <ListaCardInfosItem>
                      <img src={local} alt="local-icon" />
                      <ListaCardInfosTitulo>{item[2]}</ListaCardInfosTitulo>
                    </ListaCardInfosItem>
                    {/* {
                      <img
                        src={mapaPreview(
                          "Avenida Contorno Leste, 450., Caucaia, CE, Brazil"
                        )}
                        alt="mapa"
                      />
                    } */}
                    <ListaCardInfosItem>
                      <img src={mapa} alt="mapa-icon" />
                      <ListaCardInfosEndereco>
                        {item[5]}, {item[7]}, {item[6]} - {item[4]}
                      </ListaCardInfosEndereco>
                    </ListaCardInfosItem>

                    <ListaCardInfosItem>
                      <img src={tel} alt="tel-icon" />
                      <ListaCardInfosContato>{item[8]}</ListaCardInfosContato>
                    </ListaCardInfosItem>
                    <ListaCardInfosItem>
                      <img src={calendario} alt="calendario-icon" />
                      <ListaCardInfosHorario>
                        {item[9]} a {item[10]}
                      </ListaCardInfosHorario>
                    </ListaCardInfosItem>
                    <ListaCardInfosItem>
                      <img src={relogio} alt="relogio-icon" />
                      <ListaCardInfosHorario>
                        {item[11]} às {item[12]}{" "}
                      </ListaCardInfosHorario>
                      {horaAtual > item[12] ? (
                        <p>Fechado</p>
                      ) : (
                        <ListaCardAberto>Aberto</ListaCardAberto>
                      )}
                    </ListaCardInfosItem>
                  </ListaCardInfos>
                  <ListaCardDetalhes>{item[13]}</ListaCardDetalhes>
                </ListaCardsBase>
              </>
            ))}
        </ListaCardCardsContainer>
      </ListaCardContainer>
    </>
  );
};

export default ListaCards;
