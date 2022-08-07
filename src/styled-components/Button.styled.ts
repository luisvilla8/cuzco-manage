import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: var(--textColor);
  font-size: 1.2rem;
  cursor: pointer;

  svg {
    filter: drop-shadow(0px 0px 5px var(--primaryColor));
  }
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
  @media (min-width: 768px) {
    width: 0rem;
    opacity: 0;
    display: none;
  }
`

export const ModalButton = styled(ButtonStyled)`
  background-color: var(--primaryColor);
  padding: .7rem 2rem;
  margin-top: 2rem;
  float: right;
  border: none;
  border-radius: .5rem;
  color: #fff;
  font-size: .8rem;
  font-weight: 600;
  transition: var(--transition);
  &:hover {
    box-shadow: 0px 4px 30px -5px #2C27FF;
  }
`

export const CancelButton = styled(ModalButton)`
  float: left;
  background-color: var(--primarySecondColor);
  &:hover {
    box-shadow: none;
  }
`

export const CloseButton = styled.button`
  background-color: var(--primarySecondColor);
  padding: .25rem;
  border: none;
  border-radius: .5rem;
  color: var(--titleModalColor);
  font-size: .8rem;
  position: absolute;
  top: 2.5rem;
  right: 3rem;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    background-color: transparent;
    font-size: 2rem;
  }
`

