import { ReactNode } from "react";
import { Icon, InputGroup, Label, ModalInput } from "../styled-components";
import { defineInputWidth, definePlaceholder } from "../util";

interface Props {
  children: string;
  width?: string;
  id: string;
  type: string;
  icon?: ReactNode;
  value?: string | number;
}

export const Input = ({ children, id, type, width = "7rem", icon, value }: Props) => {

  return (
    <InputGroup width={width}>
      <Label htmlFor={id}>{children} :</Label>
      <ModalInput
        type={type}
        id={id}
        placeholder={definePlaceholder(type, children)}
        width={defineInputWidth(icon)}
        defaultValue={value}
      />
      {icon && <Icon>{icon}</Icon>}
    </InputGroup>
  );
};
