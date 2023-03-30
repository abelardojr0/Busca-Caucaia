import axios from "axios";
import React from "react";
import Card from "../Card/Card";
import {
  CategoriasComponent,
  CategoriasContainer,
  CategoriasTitulo,
} from "./StylesCategorias";

const Categorias = () => {
  const [categorias, setCategorias] = React.useState([]);
  const rota = "http://localhost:5000";
  React.useEffect(() => {
    axios
      .get(rota + "/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CategoriasContainer>
        <CategoriasTitulo>Categorias</CategoriasTitulo>
        <CategoriasComponent>
          {categorias &&
            categorias.map((categoria) => (
              <Card
                id={categoria[0]}
                nome={categoria[1]}
                imagem={categoria[2]}
              />
            ))}
        </CategoriasComponent>
      </CategoriasContainer>
    </>
  );
};

export default Categorias;
