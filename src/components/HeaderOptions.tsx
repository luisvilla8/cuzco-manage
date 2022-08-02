import { BsMoonStarsFill } from "react-icons/bs"
import { CgMenuRight } from "react-icons/cg"
import { HeaderOptions as HeaderOptionsStyled, ToggleThemeButton, Profile } from "../styled-components"
import { MenuButton } from "./MenuButton"

export const HeaderOptions = () => {

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <HeaderOptionsStyled>
      <ToggleThemeButton
        onClick={handleToggleTheme}
      >
        <BsMoonStarsFill />
      </ToggleThemeButton>
      <Profile />
      <MenuButton>
        <CgMenuRight />
      </MenuButton>
    </HeaderOptionsStyled>
  )
}
