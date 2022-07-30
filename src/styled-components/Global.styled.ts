import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontFamily: 'Inter', sans-serif;
    --textColor: #333333;
    --primaryColor: #282880;
    --bgColor: #fff;
  }
  html,
  body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--fontFamily);
    background-color: var(--bgColor);
    transition: background-color 0.2s linear;
  }
  
  html.dark {
    --textColor: #ABAAAA;
    --bgColor: #141414;
  }
`;