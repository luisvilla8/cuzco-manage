import { BsTable } from "react-icons/bs"
import { AiFillContainer } from "react-icons/ai"
import { useNavbarContext } from "../context/NavbarProvider"
import { NavbarStyled } from "../styled-components"
import { NavLink } from "./NavLink"
import { NavGroup } from "./NavGroup"
import { useAuthContext } from "../context/AuthProvider"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../services/auth"
import { useFetch } from "../hook"

export const Navbar = () => {
  const { callEndPoint } = useFetch();
  const { isOpen } = useNavbarContext()
  const { handleLogout: logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await callEndPoint(logoutUser());
    if (response.status === 200) {
      logout();
      navigate('/login');
    }
  }

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
      <span onClick={ handleLogout }>Cerrar sesión</span>
    </NavbarStyled>
  )
}
