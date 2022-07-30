import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bgColor);
  transition: background-color 0.2s linear;
  h1 {
    color: var(--primaryColor);
    font-weight: 900;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
`

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem
`