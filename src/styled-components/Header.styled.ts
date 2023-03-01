import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bgColor);
  transition: background-color var(--transition);
  h1 {
    color: var(--primaryColor);
    font-weight: 900;
  }
  .nav_img_logo {
    cursor: pointer;
    transition: filter .3s ease;
  }
  html.light & .nav_img_logo {
    filter: invert(1);
  }
  html.light & .nav_img_logo:hover {
    filter: invert(1) drop-shadow(0px 0px 16px black);
  }
  html.dark & .nav_img_logo {
    filter: invert(0);
  }
  html.dark & .nav_img_logo:hover {
    filter: invert(0) drop-shadow(0px 0px 16px white);
  }
`

export const HeaderOptionsStyled = styled.section`
  display: flex;
  justify-content: space-between;

  & > svg {
    fill: var(--primaryColor);
    font-size: 1.5rem;
  }
`