import styled from "styled-components";

export const RowButtonStyled = styled.button`
  font-size: .7rem;
  margin: .25rem;
  padding: .25rem .5rem;
  border: none;
  border-radius: .3rem;
  cursor: pointer;
  @media (min-width: 768px) {
    margin: 0 .5rem;
  }
`

export const EditButtonStyled = styled(RowButtonStyled)`
  background-color: var(--yellow);
`

export const DeleteButtonStyled = styled(RowButtonStyled)`
  background-color: var(--red);
`