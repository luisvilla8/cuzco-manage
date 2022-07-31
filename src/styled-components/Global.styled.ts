import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontFamily: 'Inter', sans-serif;
    --textColor: #333333;
    --primaryColor: #282880;
    --bgColor: #fff;
    --transition: 0.5s ease
  }
  html,
  body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--fontFamily);
    background-color: var(--bgColor);
    transition: background-color var(--transition);
  }
  
  html.dark {
    --textColor: #ABAAAA;
    --bgColor: #141414;
  }
`;