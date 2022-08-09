import styled from "styled-components";

interface RowButtonProp {
  color: "edit" | "delete";
}

export const RowButtonStyled = styled.button<RowButtonProp>`
  font-size: .7rem;
  margin: .25rem;
  padding: .25rem .5rem;
  border: none;
  border-radius: .3rem;
  cursor: pointer;
  background-color: ${ prop => prop.color === "edit" 
    ? "var(--yellow)"
    : "var(--red)"
  };
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    margin: 0 .5rem;
  }
`