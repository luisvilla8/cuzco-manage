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
  margin: 0 1rem;
`
export const MenuButton = styled(ButtonStyled)`
  font-size: 1.8rem;
  display: block;
  margin-left: .5rem;
  transition: width .5s ease, opacity .5s ease;
  color: var(--textSecondColor);
  &:hover {
    transition: color .3s ease;
    color: var(--textColor);
  }
  @media (min-width: 768px) {
    width: 0rem;
    opacity: 0;
    display: none;
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
  right: 3rem;
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    background-color: transparent;
    font-size: 2.2rem;
  }
`

