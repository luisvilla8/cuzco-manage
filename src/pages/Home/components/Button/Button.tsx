import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled"

type Prop = {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Prop) => {
  return (
    <ButtonStyled onClick={ onClick }>{ children }</ButtonStyled>
  )
}
