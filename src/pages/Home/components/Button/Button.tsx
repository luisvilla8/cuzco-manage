import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled"

type Prop = {
  children: ReactNode;
}

export const Button = ({ children }: Prop) => {
  return (
    <ButtonStyled>{ children }</ButtonStyled>
  )
}
