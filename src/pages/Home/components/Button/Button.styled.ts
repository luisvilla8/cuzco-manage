import styled from "styled-components";

type props = {
  type?: "secondary"
}

export const ButtonStyled = styled.button<props>`
  padding: 1rem 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.type === 'secondary' ? "var(--bgInputColor)" : "var(--primaryColor)"};
  color:${props => props.type === 'secondary' ? "var(--primaryColor)" : "var(--bgInputColor)"};
  font-weight: 900;
  width: 12rem;
  margin: 1rem auto;
  cursor: pointer;
`;