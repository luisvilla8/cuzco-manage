import { ReactNode } from "react"
import { Link } from "../styled-components"

interface Props {
  children: ReactNode;
  title: string;
  path: string;
}

export const NavLink = ({ children, title, path }: Props) => {
  return (
    <Link to={path}>
      { children }
      { title }
    </Link>
  )
}
