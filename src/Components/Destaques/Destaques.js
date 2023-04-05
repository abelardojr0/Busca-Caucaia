import axios from "axios";
import React from "react";
import CardEstabelecimento from "../CardEstabelecimento/CardEstabelecimento";
import {
  DestaquesCardsContainer,
  DestaquesContainer,
  DestaquesTitulo,
} from "./StylesDestaques";

const Destaques = () => {
  const [mercados, setMercados] = React.useState([]);
  const rota = "https://busca-caucaia-gules.vercel.app";
  React.useEffect(() => {
    axios
      .get(rota + "/mercados")
      .then((response) => {
        setMercados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <DestaquesContainer>
        <DestaquesTitulo>Estabelecimentos Destaques</DestaquesTitulo>
        <DestaquesCardsContainer>
          {mercados &&
            mercados.map((mercado) => (
              <CardEstabelecimento nome={mercado[2]} imagem={mercado[3]} />
            ))}
        </DestaquesCardsContainer>
      </DestaquesContainer>
    </>
  );
};

export default Destaques;
