import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--paddingContainerSM) 0;
  background-color: var(--bgColor);
  transition: background-color var(--transition);
  h1 {
    color: var(--primaryColor);
    font-weight: 900;
  }
  @media (min-width: 768px) {
    padding: var(--paddingContainerMD) 0;
  }
`

export const HeaderOptions = styled.section`
  display: flex;
  justify-content: space-between;
`