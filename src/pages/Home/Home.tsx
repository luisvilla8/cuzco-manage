import { useState } from "react";
import { getModalContext } from "../../context";
import { useFetch } from "../../hook";
import { getProviders } from "../../services";
import { getClients } from "../../services/clients";
import { Button } from "./components/Button/Button"
import { ModalAdd } from "./components/Modal/ModalAdd"
import { HomeStyled, HomeTitle } from "./Home.styled"
import { ModalBill } from "../Home";
import { TYPE_BOLETA, TYPE_FACTURA } from "../../constants";

export const Home = () => {

  const { callEndPoint } = useFetch();
  const { handleOpen } = getModalContext();
  const [ data, setData ] = useState([])
  const [ modalType, setModalType ] = useState("");
  const [ isModalBillOpen, setIsModalBillOpen ] = useState(false)
  const [ modalBillType, setModalBillType ] = useState<"BOLETA" | "FACTURA">("BOLETA")

  const handleClick = async (type = "sale") => {
    const fetcher = type === "purchase" ? getProviders : getClients;
    const response = await callEndPoint(fetcher())
    if (response.status === 200) {
      const { data } = response.data;
      setModalType(type)
      setData(data)
    }
    handleOpen({ type: "add"}, {})
  }

  const openModalBill = (type: "BOLETA" | "FACTURA") => {
    setModalBillType(type)
    setIsModalBillOpen(true)
  }
  const closeModalBill = () => setIsModalBillOpen(false)

  return (
    <HomeStyled>
      <HomeTitle>
        <h4>AGROINVERSIONES</h4>
        <h1>CUSCO</h1>
      </HomeTitle>
      <Button onClick={ () => handleClick("sale") } type="secondary">Registrar venta</Button>
      <Button onClick={ () => handleClick("purchase") } type="secondary">Registrar compra</Button>
      <Button onClick={ () => openModalBill(TYPE_FACTURA) } type="primary">Generar Factura</Button>
      <Button onClick={ () => openModalBill(TYPE_BOLETA) } type="primary">Generar Boleta</Button>
      <ModalAdd data={data} modalType={modalType}/>
      <ModalBill isOpen={isModalBillOpen} closeModal={closeModalBill} type={modalBillType}/>
    </HomeStyled>
  )
}
