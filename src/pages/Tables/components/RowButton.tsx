import { ReactNode, useMemo } from "react";
import { getModalContext } from "../../../context";
import { Credit } from "../../../models";
import { RowButtonStyled } from "../styled-components";

interface Props {
  children?: ReactNode;
  type: "edit" | "delete";
  data: Credit;
}

export const RowButton = ({ children, type, data }: Props) => {
  const { handleOpen } = getModalContext();
  return useMemo(() => {
    return <RowButtonStyled
      color={type}
      onClick={() => handleOpen(type, data)}
    >{children}</RowButtonStyled>
  },
    [children])
};