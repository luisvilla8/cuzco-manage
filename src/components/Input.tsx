import { ReactNode } from "react";
import { icons } from "react-icons/lib";
import { Icon, InputGroup, Label, ModalInput } from "../styled-components";
import { defineInputWidth, definePlaceholder } from "../util";

interface Props {
  children: string;
  width?: string;
  id: string;
  type: string;
  icon?: ReactNode;
}

export const Input = ({ children, id, type, width = "7rem", icon }: Props) => {
  
  return (
    <InputGroup width={width}>
      <Label htmlFor={id}>{children} :</Label>
      <ModalInput type={type} id={id} placeholder={definePlaceholder(type, children)} width={defineInputWidth(icon)} />
      {icon && <Icon>{icon}</Icon>}
    </InputGroup>
  );
};
