import { BsMoonStarsFill } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg'
import { NavbarProvider } from '../context/NavbarProvider';
import { HeaderContainer, HeaderOptions, Profile, ToggleThemeButton } from "../styled-components";
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
        <Navbar />
        <HeaderOptions>
          <ToggleThemeButton
            onClick={handleToggleTheme}
          >
            <BsMoonStarsFill />
          </ToggleThemeButton>
          <Profile />
          <MenuButton>
            <CgMenuRight />
          </MenuButton>
        </HeaderOptions>
      </HeaderContainer>
    </NavbarProvider>
  )
}
