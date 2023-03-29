import React from "react";
import { MapaConteiner, MapaTitulo } from "./StylesMapa";

const Mapa = () => {
  return (
    <>
      <MapaConteiner>
        <MapaTitulo>Explore a cidade</MapaTitulo>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31850.60145503446!2d-38.65081105329955!3d-3.739144447634582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0b56dfdbff18d%3A0xa8ded9006dd0d827!2sCaucaia%20-%20Jurema%2C%20Caucaia%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1680042155923!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          title="Mapa Caucaia"
          style={{ border: "0px", borderRadius: "15px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapaConteiner>
    </>
  );
};

export default Mapa;
