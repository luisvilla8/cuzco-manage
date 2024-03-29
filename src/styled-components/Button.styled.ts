import styled from "styled-components";

interface ButtonProp {
  typeButton: "cancel" | "edit" | "add" | "confirm";
}

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: var(--textColor);
  font-size: 1.2rem;
  cursor: pointer;
`;
export const ToggleThemeButton = styled(ButtonStyled)`
  font-size: 1.2rem;
  margin: 0 .5rem;
  background-color: var(--bgInputColor);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  transition: background-color .3s ease border .3s ease;

  &:hover {
    background-color: var(--rowHover);
    outline: 1px solid var(--bgInputColor);
  }

  html.light &:nth-of-type(1) svg:nth-of-type(2) {
    display: none;
  }
  html.dark &:nth-of-type(1) svg:nth-of-type(1) {
    display: none;
  }
  &:nth-of-type(2) {
    color: var(--primaryColor);
  }
`
export const MenuButton = styled(ButtonStyled)`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: .5rem;
  padding: 0.3rem 0.4rem;
  transition: width .5s ease, opacity .5s ease;
  color: var(--textSecondColor);
  background-color: var(--bgInputColor);
  border-radius: 0.5rem;

  &:hover {
    transition: color .3s ease;
    color: var(--textColor);
    background-color: var(--rowHover);
    outline: 1px solid var(--bgInputColor);
  }
`

export const ModalButton = styled(ButtonStyled)<ButtonProp>`
  background-color: ${prop => prop.typeButton === 'cancel' 
  ? "var(--primarySecondColor)" : "var(--primaryColor)"};
  padding: ${prop => prop.typeButton === 'add'
  ? "0rem .8rem" : ".7rem 2rem"};
  margin: 1rem 0;
  float: ${ prop => prop.typeButton === "cancel"
  ? "left" : "right"};
  border: none;
  border-radius: .5rem;
  color: #fff;
  font-size: ${prop => prop.typeButton === 'add'
  ? "2rem" : ".8rem"};
  font-weight: 600;
  transition: var(--transition);
  &:hover {
    transform: scale(1.05);
    transition: transform .2s ease;
    font-weight: 700;
    box-shadow: ${prop => prop.typeButton === 'cancel' 
    ? "none" : "0px 4px 30px -5px var(--primaryColor)"};
  }
`

export const CloseButton = styled.button`
  background-color: var(--primarySecondColor);
  padding: .2rem;
  border: none;
  border-radius: .5rem;
  color: var(--titleModalColor);
  position: absolute;
  top: 2.5rem;
  right: 1.8rem;
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    background-color: transparent;
    font-size: 2.2rem;
  }

  @media screen and (min-width: 480px) {
    & {
      right: 3rem;
    }
  }
`

