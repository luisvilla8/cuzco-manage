import { BsFillMoonFill } from "react-icons/bs"
import { RiSunFill } from "react-icons/ri"
import { CgMenuRight } from "react-icons/cg"
import { BiWorld } from "react-icons/bi"
import { useLocalStorage } from "../hook"
import { HeaderOptionsStyled, ToggleThemeButton, Profile } from "../styled-components"
import { MenuButton } from "./MenuButton"

export const HeaderOptions = () => {
  const { storedValue, setValue } = useLocalStorage("theme", "light");
  const handleToggleTheme = () => {
    if (storedValue === "light") setValue("dark");
    else setValue("light");
    document.documentElement.className = storedValue;
  }
  document.documentElement.className = storedValue;

  const handleOpenWeb = () => {
    window.open("https://cusco-web.netlify.app/home", "_blank");
  }

  return (
    <HeaderOptionsStyled>
      <ToggleThemeButton
        onClick={handleToggleTheme}
      >
        <BsFillMoonFill />
        <RiSunFill />
      </ToggleThemeButton>
      {/* <Profile /> */}
      <ToggleThemeButton
        onClick={ handleOpenWeb }
      >
        <BiWorld />
      </ToggleThemeButton>
      <MenuButton>
        <CgMenuRight />
      </MenuButton>
    </HeaderOptionsStyled>
  )
}
