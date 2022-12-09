import { ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getModalContext } from "../../../context";
import { Credit } from "../../../models";
import { getCurrentTableName } from "../../../util";
import { RowButtonStyled } from "../styled-components";

interface Props {
  children?: ReactNode;
  type: "edit" | "delete";
  data: Credit;
}

export const RowButton = ({ children, type, data }: Props) => {
  const { handleOpen } = getModalContext();

  const { pathname } = useLocation();
  const tableName = getCurrentTableName(pathname);

  return useMemo(() => {
    return <RowButtonStyled
      color={type}
      onClick={() => handleOpen({ type, table: tableName}, data)}
    >{children}</RowButtonStyled>
  },
    [children])
};