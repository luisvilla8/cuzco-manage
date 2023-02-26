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

  html.light & .nav_img_logo {
    filter: invert(1);
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