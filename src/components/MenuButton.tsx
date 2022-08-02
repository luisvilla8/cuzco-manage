import { ReactNode } from "react";
import { useNavbarContext } from "../context/NavbarProvider";
import { MenuButton as MenuButtonStyled } from "../styled-components/"

interface Props {
  children: ReactNode;
}

export const MenuButton = ({ children }: Props) => {

  const { toggleIsOpen } = useNavbarContext()

  return (
    <MenuButtonStyled onClick={ toggleIsOpen }>
      {children}
    </MenuButtonStyled>
  )
}
