import { createContext, ReactNode, useContext, useState } from "react";

interface Prop {
  children: ReactNode;
}

const defaultContext = {
  isOpen: false,
  type: "",
  handleOpen: (type: string) => {},
  handleClose: () => {}
};

const ModalContext = createContext(defaultContext);
export const useModalContext = () => useContext(ModalContext)

export const ModalProvider = ({ children }: Prop) => {
  
  const [ isOpen, setIsOpen ] = useState(false);
  const [ type, setType ] = useState("");
  
  const handleOpen = (type: string) => {
    setIsOpen(true);
    console.log(type);
    setType(type);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{
      isOpen,
      type,
      handleOpen,
      handleClose
    }}>
      { children }
    </ModalContext.Provider>
  )
}