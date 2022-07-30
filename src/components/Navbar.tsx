import { BsTable } from "react-icons/bs"
import { AiFillContainer } from "react-icons/ai"
import { useNavbarContext } from "../context/NavbarProvider"
import { Nav } from "../styled-components"
import { NavLink } from "./NavLink"

export const Navbar = () => {
  const { isOpen } = useNavbarContext()
  return (
    <Nav isOpen={isOpen}>
      <NavLink path="tables" title="Tables">
        <BsTable />
      </NavLink>
      <NavLink path="manage" title="Manage">
        <AiFillContainer />
      </NavLink>
    </Nav>
  )
}
