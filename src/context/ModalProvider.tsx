import { createContext, ReactNode, useContext, useState } from "react";
// import { Credit } from "../models";

interface Prop {
  children: ReactNode;
}

interface Context {
  isOpen: boolean;
  isSubOpen: boolean;
  type: object;
  rowData: any;
  handleOpen: (type: object, data: any) => void;
  handleClose: () => void;
  openSubModal: () => void;
  closeSubModal: () => void;
}

const defaultContext: Context = {
  isOpen: false,
  isSubOpen: false,
  type: () => {},
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
  handleClose: () => {},
  openSubModal: () => {},
  closeSubModal: () => {}
};

const ModalContext = createContext(defaultContext);
export const getModalContext = () => useContext(ModalContext)

export const ModalProvider = ({ children }: Prop) => {
  
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isSubOpen, setIsSubOpen ] = useState(false);
  const [ type, setType ] = useState({});
  const [ rowData, setRowData ] = useState({})
  
  const handleOpen = (type: object, data: any) => {
    setIsOpen(true);
    setType(type);
    setRowData(data);
  }

  const handleClose = () => {
    if (isSubOpen) setIsSubOpen(false);
    else setIsOpen(false);
  }

  const openSubModal = () => {
    setIsSubOpen(true)
  }
  const closeSubModal = () => {
    setIsSubOpen(false)
  }

  return (
    <ModalContext.Provider value={{
      isOpen,
      type,
      handleOpen,
      handleClose,
      rowData,
      isSubOpen,
      openSubModal,
      closeSubModal
    }}>
      { children }
    </ModalContext.Provider>
  )
}