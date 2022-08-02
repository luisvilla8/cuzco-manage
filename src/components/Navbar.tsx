import { BsTable } from "react-icons/bs"
import { AiFillContainer } from "react-icons/ai"
import { useNavbarContext } from "../context/NavbarProvider"
import { NavbarStyled } from "../styled-components"
import { NavLink } from "./NavLink"
import { NavGroup } from "./NavGroup"

export const Navbar = () => {
  const { isOpen } = useNavbarContext()
  return (
    <NavbarStyled isOpen={isOpen}>
      <NavGroup title="Tablas" icon={<BsTable />}>
        <NavLink path="/tablas/pedidos" title="Pedidos" />
        <NavLink path="/tablas/pedidos" title="Productos" />
      </NavGroup>
      <NavGroup title="Gestión" icon={<AiFillContainer />}>
        <NavLink path="/pedidos" title="Pedidos" />
        <NavLink path="productos" title="Productos" />
      </NavGroup>
    </NavbarStyled>
  )
}
