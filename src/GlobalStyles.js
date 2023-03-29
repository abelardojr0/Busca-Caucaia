import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body{
    display: grid;
    height: 100%;
    background-color: #20202c;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;;
  }
  #root{
    width: 100vw;
  }
`;
export const ContainerPages = styled.div`
  max-width: 90%;
  overflow-x: hidden;

  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
export const ContainerCarregando = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;
