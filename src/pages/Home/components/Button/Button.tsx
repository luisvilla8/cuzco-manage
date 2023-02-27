import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled"

type Prop = {
  children: ReactNode;
  onClick: () => void;
  type: "secondary" | "primary"
}

export const Button = ({ children, onClick, type = "primary"}: Prop) => {
  return (
    <ButtonStyled onClick={ onClick } typeButton={type}>{ children }</ButtonStyled>
  )
}
