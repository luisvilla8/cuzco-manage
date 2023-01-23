import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontFamily: 'Inter', sans-serif;
    --textColor: #333333;
    --textSecondColor: #ABAAAA;
    --titleModalColor: #141414;
    --textTableBody: #333333;
    /* --primaryColor: #282880; */
    --primaryColor: #a0ec7d;
    --primarySecondColor: #D4D4E6;
    --bgColor: #fff;
    --bgInputColor: #E8E8E8;
    --rowColor: #D9D9D9;
    --rowColor2: #e9e9e9;
    --rowHover: #bcbceb;
    --yellow: #BDA735;
    --red: #C24D4D;
    --primary_color: #a0ec7d;
    --primary_bg_color: #1a1a1a;
    --secondary_bg_color: #0f0f0f;
    --primary_text_color: #141414;
    --secondary_text_color: #ABAAAA;
    --tertiary_text_color: #333333;
    --transition: 0.5s ease;
    --padding_container_x: 2rem;
    --padding_container_y: 2rem;
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
  textarea,
  input {
    font-family: var(--fontFamily);
  }
  *{
    transition: background-color var(--transition);
  }
  
  input {
    font-family: var(--fontFamily);
  }
  
  a {
    text-decoration: none;
    color: var(--secondary_text_color);
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
    --rowHover: #1b1e19;
    --primarySecondColor: #212121;
    --primary_color: #a0ec7d;
    --red_color: #f84747;
    --primary_bg_color: #222222;
    --secondary_bg_color: #0f0f0f;
    --primary_text_color: #E8E8E8;
    --secondary_text_color: #ABAAAA;
    --tertiary_text_color: #ABAAAA;


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

  ::selection {
    background-color: var(--primaryColor);
  }
`;