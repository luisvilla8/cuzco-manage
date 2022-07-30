import { ReactNode } from "react";
import { useNavbarContext } from "../context/NavbarProvider";
import { MenuButton as StyledButton} from "../styled-components/"

interface Props {
  children: ReactNode;
}

export const MenuButton = ({ children }: Props) => {

  const { toggleIsOpen } = useNavbarContext()

  return (
    <StyledButton onClick={ toggleIsOpen }>
      {children}
    </StyledButton>
  )
}
