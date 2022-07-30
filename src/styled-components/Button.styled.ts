import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: var(--textColor);
  font-size: 1.2rem;
  cursor: pointer;

  svg {
    filter: drop-shadow(0px 0px 5px var(--primaryColor));
  }
`;

export const MenuButton = styled(Button)`
  font-size: 1.8rem;
`