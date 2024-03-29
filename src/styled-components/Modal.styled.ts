import styled from "styled-components";

interface InputGroupProp {
  width: string;
}

export const BackgroundModal = styled.section`
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
  width: clamp(19rem,80vw,26rem);
  height: auto; 
  padding: 3rem clamp(1.6rem,8vw,3rem);
  position: relative;
`

type TitleProps = {
  align?: "center"
}

export const Title = styled.h2<TitleProps>`
  color: var(--titleModalColor);
  font-weight: 800;
  margin-bottom: 1rem;
  width: fit-content;
  margin: ${ props => props.align === "center" ? "0 auto" : "0"};
`

export const SubTitle = styled.h3`
  color: var(--titleModalColor);
  font-weight: 500;
  margin-bottom: 1rem;
  width: fit-content;
  font-size: 1rem;
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
  color: var(--textTableBody);
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