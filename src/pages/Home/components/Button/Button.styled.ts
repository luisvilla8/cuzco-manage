import styled from "styled-components";

type props = {
  typeButton: "secondary" | "primary"
}

export const ButtonStyled = styled.button<props>`
  padding: 1rem 1rem;
  margin: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.typeButton === 'secondary' ? "var(--bgInputColor)" : "var(--primaryColor)"};
  color:${props => props.typeButton === 'secondary' ? "var(--primaryColor)" : "var(--bgInputColor)"};
  font-weight: 900;
  width: 12rem;
  margin: 1rem auto;
  cursor: pointer;
`;