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
export const ToggleThemeButton = styled(Button)`
  font-size: 1.2rem;
  margin: 0 1rem;
`
export const MenuButton = styled(Button)`
  font-size: 1.8rem;
  display: block;
  margin-left: .5rem;
  transition: width .5s ease, opacity .5s ease;
  @media (min-width: 768px) {
    width: 0rem;
    opacity: 0;
    display: none;
  }
`