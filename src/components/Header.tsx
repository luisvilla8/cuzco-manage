import { NavbarProvider } from '../context/NavbarProvider';
import { HeaderContainer } from "../styled-components";
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { HeaderOptions } from './HeaderOptions';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/home');
  }

  return (
    <NavbarProvider>
      <HeaderContainer>
        <Logo>
          <picture className="logo" onClick={ handleHome }>
            <img src="../../../logo.svg" alt="logo cusco" width={30} className="nav_img_logo"/>
          </picture>
        </Logo>
        <Navbar />
        <HeaderOptions />
      </HeaderContainer>
    </NavbarProvider>
  )
}
