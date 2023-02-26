import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled"

type Prop = {
  children: ReactNode;
  onClick: () => void;
  type?: "secondary"
}

export const Button = ({ children, onClick, type }: Prop) => {
  return (
    <ButtonStyled onClick={ onClick } type={type}>{ children }</ButtonStyled>
  )
}
