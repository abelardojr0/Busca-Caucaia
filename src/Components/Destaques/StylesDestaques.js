import styled from "styled-components";

export const DestaquesContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    0deg,
    rgba(32, 32, 44, 1) 0%,
    rgba(60, 63, 67, 1) 100%
  );
`;
export const DestaquesCardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const DestaquesTitulo = styled.h1`
  font-size: 4rem;
  margin-bottom: 40px;
  color: white;
  margin-top: 120px;
  text-align: center;
`;
