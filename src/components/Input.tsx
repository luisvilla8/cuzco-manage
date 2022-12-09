import { ReactNode } from "react";
import { Icon, InputGroup, Label, ModalInput, TextArea } from "../styled-components";
import { defineInputWidth, definePlaceholder } from "../util";

interface Props {
  children: string;
  width?: string;
  id: string;
  type: string;
  name: string;
  icon?: ReactNode;
  value?: string | number;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ children, id, type, name, width = "7rem", icon, value, handleChange }: Props) => {

  return (
    <InputGroup width={width}>
      <Label htmlFor={id}>{children} :</Label>
      { type === "textarea" 
        ? <TextArea  
            width={defineInputWidth(icon)}
            placeholder={definePlaceholder(type, children)}
          >{value}</TextArea>
        : <ModalInput
            type={type}
            id={id}
            name={name}
            placeholder={definePlaceholder(type, children)}
            width={defineInputWidth(icon)}
            defaultValue={value}
            onChange={ handleChange }
          />
      }
      {icon && <Icon>{icon}</Icon>}
    </InputGroup>
  );
};
