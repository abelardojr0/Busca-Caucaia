import styled from "styled-components";

export const ListaCardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    0deg,
    rgba(32, 32, 44, 1) 0%,
    rgba(60, 63, 67, 1) 100%
  );
`;
export const ListaCardCardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;
export const ListaCardImagem = styled.img`
  max-width: 250px;
  max-height: 250px;
  border-radius: 10px 0px 0px 10px;
  padding: 5px 0;
`;
export const ListaCardsBase = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 700px;
  height: 250px;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const ListaCardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-width: 200px;
  padding: 20px 0;
  box-sizing: border-box;
  gap: 10px;
  img {
    max-width: 30px;
  }
`;
export const ListaCardInfosItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const ListaCardInfosTitulo = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const ListaCardInfosEndereco = styled.p`
  font-size: 0.8rem;
  color: black;
`;
export const ListaCardInfosContato = styled.p`
  font-size: 0.8rem;
  color: blue;
`;
export const ListaCardInfosHorario = styled.p`
  font-size: 0.8rem;
  color: black;
`;
export const ListaCardDetalhes = styled.p`
  font-size: 0.8rem;
  color: black;
  max-width: 280px;
  align-self: flex-start;
  margin-top: 20px;
`;
export const ListaCardTitulo = styled.h1`
  font-size: 4rem;
  margin-bottom: 40px;
  color: white;
  margin-top: 120px;
  text-align: center;
`;

export const ListaCardAberto = styled.span`
  color: green;
  position: relative;
  text-transform: uppercase;
  &::before {
    content: "";
    width: 15px;
    height: 15px;
    position: absolute;
    right: -25px;
    background-color: green;
    border-radius: 50%;
  }
`;
