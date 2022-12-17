// @ts-nocheck
import { ReactNode } from "react";
import { Icon, InputGroup, Label, ModalInput, Select, TextArea } from "../styled-components";
import { defineInputWidth, definePlaceholder } from "../util";

interface Props {
  children: string;
  width?: string;
  id: string;
  type: string;
  name?: string;
  icon?: ReactNode;
  value?: string | number;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectOptions?: never[];
}

export const Input = ({ children, id, type, name, width = "7rem", icon, value, handleChange, selectOptions = [] }: Props) => {
  return (
    <InputGroup width={width}>
      <Label htmlFor={id}>{children} :</Label>
      {
        type === "select" ? (
          <Select value={value} name={name} id={id} placeholder={definePlaceholder(type, children)} width={defineInputWidth(icon)} onChange={handleChange}>
            <option value="">Selecciona un { children }</option>
            {
              selectOptions.map((option: any) => {
                return (
                  <option key={option.id} value={option.id}>{option.nombre}</option>
                )
              })
            }
          </Select>)
        :
         type === "textarea" 
        ? <TextArea  
            id={id}
            name={name}
            width={defineInputWidth(icon)}
            placeholder={definePlaceholder(type, children)}
            value={value}
            onChange={ handleChange }
          >{value}</TextArea>
        : <ModalInput
            type={type}
            id={id}
            name={name}
            placeholder={definePlaceholder(type, children)}
            width={defineInputWidth(icon)}
            value={value}
            onChange={ handleChange }
          />
      }
      {icon && <Icon>{icon}</Icon>}
    </InputGroup>
  );
};
