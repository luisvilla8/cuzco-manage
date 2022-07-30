import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface INavbarContext {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const defaultContext = {
  isOpen: false,
  toggleIsOpen: () => {}
}

const NavbarContext = createContext<INavbarContext>(defaultContext);
export const useNavbarContext = () => useContext(NavbarContext)

export const NavbarProvider = ({ children }: Props) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleToggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const contextValue: INavbarContext = {
    isOpen,
    toggleIsOpen: handleToggleOpen
  }

  return (
    <NavbarContext.Provider value={contextValue}>
      { children }
    </NavbarContext.Provider>
  )
}
