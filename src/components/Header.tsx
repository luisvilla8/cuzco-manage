import { BsMoonStarsFill } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg'
import { NavbarProvider } from '../context/NavbarProvider';
import { HeaderContainer, HeaderOptions, Profile, Button } from "../styled-components";
import { Logo } from './Logo';
import { MenuButton } from './MenuButton';
import { Navbar } from './Navbar';

export const Header = () => {

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <NavbarProvider>
      <HeaderContainer>
        <Logo />
        <HeaderOptions>
          <Button
            onClick={handleToggleTheme}
          >
            <BsMoonStarsFill />
          </Button>
          <Profile />
          <MenuButton>
            <CgMenuRight />
          </MenuButton>
        </HeaderOptions>
        <Navbar />
      </HeaderContainer>
    </NavbarProvider>
  )
}
