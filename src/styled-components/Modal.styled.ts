import styled from "styled-components";

interface InputGroupProp {
  width: string;
}

export const BackgroundModal = styled.div`
  /* background-color: var(--rowColor); */
  background-color: rgba(37, 37, 37, .6);
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  backdrop-filter: blur(5px);
  display: grid;
  place-items: center;
  `

export const ModalStyled = styled.div`
  background-color: var(--bgColor);
  border-radius: 1rem;
  width: 26rem;
  /* height: 34rem; */
  height: auto; 
  padding: 3rem;
  position: relative;
`

export const Title = styled.h2`
  color: var(--titleModalColor);
  font-weight: 800;
  margin-bottom: 1rem;
  width: fit-content;
`

export const InputGroup = styled.div<InputGroupProp>`
  display: inline-block;
  margin: 1rem .7rem 0 0;
  width: ${prop => prop.width};
  background-color: transparent;
`
export const Label = styled.label`
  font-size: .7rem;
  font-weight: 500;
  color: var(--titleModalColor);
  background-color: transparent;
  `
export const Icon = styled.span`
  font-size: .8rem;
  font-weight: 600;
  display: inline;
  width: min-content;
  background-color: transparent;
  color: var(--titleModalColor);
`

export const Message = styled.p`
  color: var(--titleModalColor);
  text-align: center;
`