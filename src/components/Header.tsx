import { NavbarProvider } from '../context/NavbarProvider';
import { HeaderContainer } from "../styled-components";
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { HeaderOptions } from './HeaderOptions';

export const Header = () => {
  return (
    <NavbarProvider>
      <HeaderContainer>
        <Logo>LOGO</Logo>
        <Navbar />
        <HeaderOptions />
      </HeaderContainer>
    </NavbarProvider>
  )
}
