import styled from "styled-components";

export const CategoriasContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    0deg,
    rgba(60, 63, 67, 1) 0%,
    rgba(32, 32, 44, 1) 100%
  );
`;

export const CategoriasComponent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  gap: 40px;
`;

export const CategoriasTitulo = styled.h1`
  font-size: 4rem;
  margin-bottom: 40px;
  color: white;
  margin-top: 20px;
  text-align: center;
`;
