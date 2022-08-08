import styled from "styled-components";

interface ModalInputProp {
  width: string;
}

export const Input = styled.input`
  font-size: 1rem;
`

export const ModalInput = styled.input<ModalInputProp>`
  border: none;
  background-color: transparent;
  width: ${prop => prop.width};
  font-size: .7rem;
  color: var(--textColor);
  background-color: var(--bgInputColor);
  border-radius: .5rem;
  padding: .7rem .8rem;
  position: relative;
  margin-top: .25rem;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: 2px solid var(--primaryColor);
    box-shadow: 0px 0px 15px -5px #2C27FF;
    font-size: .75rem;
  }
  & + span {
    position: relative;
    right: 1.2rem;
  }
`