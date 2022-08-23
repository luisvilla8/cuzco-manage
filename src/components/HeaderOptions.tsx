import { BsMoonStarsFill } from "react-icons/bs"
import { CgMenuRight } from "react-icons/cg"
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
