import styled from "styled-components";

export const CardStyled = styled.div`
  border: 1px solid var(--primary_color);
  border-radius: .5rem;
  background-color: var(--primary_bg_color);
  padding: .7rem;
  margin: .5rem 0;
  position: relative;

  svg {
    position: absolute;
    top: .5rem;
    right: .5rem;
  }
`

export const CardName = styled.p`
  font-size: .8rem;
  font-weight: 800;
  margin-bottom: .8rem;
  color: var(--primary_text_color);
`

export const CardButtons = styled.div`
  & > button {
    border: none;
    border-radius: .25rem;
    margin: 0 .25rem;
    background-color: var(--primary_color);
    padding: 0 .5rem;
  }
`

export const CardCost = styled.p`
  font-size: 1rem;
  color: var(--primary_text_color);
  position: absolute;
  bottom: .5rem;
  right: .5rem;
`