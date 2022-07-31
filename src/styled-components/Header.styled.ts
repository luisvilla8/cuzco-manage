import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bgColor);
  transition: background-color var(--transition);
  h1 {
    color: var(--primaryColor);
    font-weight: 900;
  }
  @media (min-width: 768px) {
    padding: 1rem 4rem;
  }
`

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: space-between;
`