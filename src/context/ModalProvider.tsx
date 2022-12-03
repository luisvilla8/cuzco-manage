import { createContext, ReactNode, useContext, useState } from "react";
import { Credit } from "../models";

interface Prop {
  children: ReactNode;
}

interface Context {
  isOpen: boolean;
  type: string;
  rowData: Credit;
  handleOpen: (type: string, data: Credit) => void;
  handleClose: () => void;
}

const defaultContext: Context = {
  isOpen: false,
  type: "",
  rowData: {
    id: 11,
    titulo: "Statistician II",
    cliente: "Bevon Burnyate",
    montoTotal: 580.67,
    montoPagado: 309.27,
    fechaCreacion: "2022-03-12T20:00:55Z",
    fechaPagado: "2022-03-12T20:00:55Z"
  },
  handleOpen: (type, data) => {},
  handleClose: () => {}
};

const ModalContext = createContext(defaultContext);
export const getModalContext = () => useContext(ModalContext)

export const ModalProvider = ({ children }: Prop) => {
  
  const [ isOpen, setIsOpen ] = useState(false);
  const [ type, setType ] = useState("");
  const [ rowData, setRowData ] = useState<Credit>({
    id: 11,
    titulo: "Statistician II",
    cliente: "Bevon Burnyate",
    montoTotal: 580.67,
    montoPagado: 309.27,
    fechaCreacion: "2022-03-12T20:00:55Z",
    fechaPagado: "2022-03-12T20:00:55Z"
  })
  
  const handleOpen = (type: string, data: any) => {
    setIsOpen(true);
    setType(type);
    setRowData(data);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{
      isOpen,
      type,
      handleOpen,
      handleClose,
      rowData
    }}>
      { children }
    </ModalContext.Provider>
  )
}