import styled from "styled-components";

export const CardEstabelecimentoComponent = styled.div`
  width: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardEstabelecimentoImagem = styled.img`
  width: 100%;
  border-radius: 10px;
`;
