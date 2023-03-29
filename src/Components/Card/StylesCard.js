import styled from "styled-components";

export const CardComponent = styled.div`
  width: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
export const CardImagem = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

export const CardTitulo = styled.h1`
  font-size: 1.5rem;
  color: white;
  padding: 1rem;
`;
