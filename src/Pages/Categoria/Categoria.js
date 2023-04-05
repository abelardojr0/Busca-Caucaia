import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ListaCards from "../../Components/ListaCards/ListaCards";

const Categoria = () => {
  const { id } = useParams();
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
  return (
    <>
      <Header />
      <ListaCards lista={lista} titulo={"Teste"} />
      <Footer />
    </>
  );
};

export default Categoria;
