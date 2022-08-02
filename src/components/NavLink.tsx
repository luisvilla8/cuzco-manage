import { ReactNode } from "react"
import { NavLinkStyled } from "../styled-components"

interface Props {
  title: string;
  path: string;
}

export const NavLink = ({ title, path }: Props) => {
  return (
    <li>
      <NavLinkStyled to={path}>
        {title}
      </NavLinkStyled>
    </li>
  )
}
