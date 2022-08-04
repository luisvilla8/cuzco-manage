import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontFamily: 'Inter', sans-serif;
    --textColor: #333333;
    --textSecondColor: #ABAAAA;
    --textTableBody: #333333;
    --primaryColor: #282880;
    --bgColor: #fff;
    --rowColor: #D9D9D9;
    --rowColor2: #ABAAAA;
    --yellow: #BDA735;
    --red: #C24D4D;
    --transition: 0.5s ease;
    --paddingContainerSM: 1rem 2rem;
    --paddingContainerMD: 1rem 4rem;
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
  
  a {
    text-decoration: none;
  }

  html.dark {
    --textColor: #E8E8E8;
    --textSecondColor: #ABAAAA;
    --textTableBody: #ABAAAA;
    --bgColor: #141414;
    --rowColor: #212121;
    --rowColor2: #333333;
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--rowColor);
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: var(--rowColor2);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primaryColor);
  }
`;