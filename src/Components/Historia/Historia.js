import React from "react";
import {
  HistoriaContainer,
  HistoriaContainerTexto,
  HistoriaParagrafo,
  HistoriaTitulo,
} from "./StylesHistoria";

const Historia = () => {
  return (
    <HistoriaContainer>
      <HistoriaTitulo>Sobre a cidade</HistoriaTitulo>
      <HistoriaContainerTexto>
        <HistoriaParagrafo>
          Além de ter uma rica história, Caucaia é uma cidade vibrante e em
          constante desenvolvimento. Se você é um morador local, sabe que a
          cidade oferece muitas opções de lazer, com uma variedade de
          restaurantes, bares, festas populares, praias e trilhas naturais. Além
          disso, Caucaia é um importante centro comercial e industrial, com
          muitos estabelecimentos locais que oferecem uma ampla variedade de
          produtos e serviços para a comunidade.
        </HistoriaParagrafo>
        <HistoriaParagrafo>
          A cidade também é conhecida pela sua hospitalidade e cultura
          acolhedora, que se reflete em suas comunidades locais. Se você ainda
          não teve a oportunidade de explorar tudo o que Caucaia tem a oferecer,
          vale a pena dar uma chance e descobrir por si mesmo por que tantas
          pessoas escolhem viver e trabalhar aqui. Com sua localização
          privilegiada na costa norte do estado do Ceará, Caucaia é uma cidade
          que oferece muito para quem busca um estilo de vida descontraído e ao
          mesmo tempo dinâmico.
        </HistoriaParagrafo>
      </HistoriaContainerTexto>
    </HistoriaContainer>
  );
};

export default Historia;
