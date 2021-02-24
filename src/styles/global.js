import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 97.5%;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: Roboto, Oxygen,Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
