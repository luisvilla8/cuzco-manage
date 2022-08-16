import { useState } from "react"
import { BsMoonStarsFill } from "react-icons/bs"
import { CgMenuRight } from "react-icons/cg"
import { HeaderOptions as HeaderOptionsStyled, ToggleThemeButton, Profile } from "../styled-components"
import { MenuButton } from "./MenuButton"

export const HeaderOptions = () => {

  const theme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.add(theme);
  
  const handleToggleTheme = () => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "light") { 
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
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
