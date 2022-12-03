import { ReactNode } from "react";
import { Icon, InputGroup, Label, ModalInput, TextArea } from "../styled-components";
import { defineInputWidth, definePlaceholder } from "../util";

interface Props {
  children: string;
  width?: string;
  id: string;
  type: string;
  icon?: ReactNode;
  value?: string | number;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ children, id, type, width = "7rem", icon, value, handleChange }: Props) => {

  return (
    <InputGroup width={width}>
      <Label htmlFor={id}>{children} :</Label>
      { type === "textarea" 
        ? <TextArea  
            width={defineInputWidth(icon)}
          ></TextArea>
        : <ModalInput
            type={type}
            id={id}
            name={id}
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
