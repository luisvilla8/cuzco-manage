import { ReactNode } from "react"
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri"
import { DeleteButtonStyled, EditButtonStyled, RowButtonStyled } from "../styled-components"

interface Props {
  children?: ReactNode;
  type: string;
}

export const RowButton = ({ children, type }: Props) => {
  if (type === "edit") {
    return (
      <EditButtonStyled>
        <RiEdit2Line />
      </EditButtonStyled>)
  }
  if (type === "delete") {
    return (
      <DeleteButtonStyled>
        <RiDeleteBin2Line />
      </DeleteButtonStyled>)
  }
  return (
    <RowButtonStyled>{children}</RowButtonStyled>
  )
}
