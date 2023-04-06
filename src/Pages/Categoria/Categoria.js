import axios from "axios";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ListaCards from "../../Components/ListaCards/ListaCards";

const Categoria = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const titulo = searchParams.get("q");
  const rota = "https://busca-caucaia-gules.vercel.app";
  const [lista, setLista] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(rota + "/categoria/" + id)
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(lista);
  return (
    <>
      <Header />
      <ListaCards lista={lista} titulo={titulo} />
      <Footer />
    </>
  );
};

export default Categoria;
