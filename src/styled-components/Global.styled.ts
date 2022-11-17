import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontFamily: 'Inter', sans-serif;
    --textColor: #333333;
    --textSecondColor: #ABAAAA;
    --titleModalColor: #141414;
    --textTableBody: #333333;
    --primaryColor: #282880;
    --primarySecondColor: #D4D4E6;
    --bgColor: #fff;
    --bgInputColor: #E8E8E8;
    --rowColor: #D9D9D9;
    --rowColor2: #e9e9e9;
    --rowHover: #bcbceb;
    --yellow: #BDA735;
    --red: #C24D4D;
    --transition: 0.5s ease;
    --padding_container_x: 1rem;
    --padding_container_sm_y: 2rem;
    --padding_container_md_x: 4rem;
    --padding_container_md_y: 4rem;
    --paddingContainerSM: 2rem 2rem;
    --paddingContainerMD: 2rem 4rem;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,
  body{
    font-family: var(--fontFamily);
    background-color: var(--bgColor);
  }
  *{
    transition: background-color var(--transition);
  }
  
  input {
    font-family: var(--fontFamily);
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }

  input:focus, button:focus {
    outline: none;
  }

  html.dark {
    --textColor: #E8E8E8;
    --textSecondColor: #ABAAAA;
    --titleModalColor: #D0D0D0;
    --textTableBody: #ABAAAA;
    --bgColor: #141414;
    --bgInputColor: #333333;
    --rowColor: #181818;
    --rowColor2: #212121;
    --rowHover: #101014;
    --primarySecondColor: #212121;

    input[type="date"] {
      ::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }
    }
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