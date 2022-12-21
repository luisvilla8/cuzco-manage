import { createContext, ReactNode, useContext, useState } from "react";

interface Prop {
  children: ReactNode;
}

interface Context {
  isOpen: boolean;
  message: string;
  type: string;
  handleOpen: (message: string, type: string) => void;
  handleClose: () => void;
}

const defaultContext: Context = {
  isOpen: false,
  message: "",
  type: "",
  handleOpen: (message, type) => {},
  handleClose: () => {}
};

const AlertContext = createContext(defaultContext);
export const getAlertContext = () => useContext(AlertContext)

export const AlertProvider = ({ children }: Prop) => {
  
  const [ isOpen, setIsOpen ] = useState(false);
  const [ message, setMessage ] = useState("");
  const [ type, setType ] = useState("");
  
  const handleOpen = (message = "", type = "") => {
    setMessage(message);
    setType(type);
    setIsOpen(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  }

  const handleClose = () => {
    setMessage("");
    setType("");
    setIsOpen(false);
  }

  return (
    <AlertContext.Provider value={{
      isOpen,
      message,
      type,
      handleOpen,
      handleClose,
    }}>
      { children }
    </AlertContext.Provider>
  )
}