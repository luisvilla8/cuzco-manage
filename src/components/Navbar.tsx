import { NavLink } from "react-router-dom"
import { Nav } from "../styled-components"

export const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="tables">Tables</NavLink>
        </li>
        <li>
          <NavLink to="manage">Manage</NavLink>
        </li>
      </ul>
    </Nav>
  )
}
