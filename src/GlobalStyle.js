import { createGlobalStyle } from "styled-components";
import background from "./bg-image.png"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    padding: 0 5%;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #ddd;
    background-image: url("${background}");
    background-size: cover;
  }
`;