import React, { ReactNode } from "react";
import { useModalContext } from "../../../context";
import { RowButtonStyled } from "../styled-components";

interface Props {
  children?: ReactNode;
  type: "edit" | "delete";
}

export const RowButton = ({ children, type }: Props) => {
  const { handleOpen } = useModalContext();
  return (<>
    <RowButtonStyled
      color={type}
      onClick={() => handleOpen(type)}
    >{children}</RowButtonStyled>
  </>)
};
