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
`

export const HeaderOptionsStyled = styled.section`
  display: flex;
  justify-content: space-between;
`