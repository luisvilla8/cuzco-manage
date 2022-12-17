import { useState } from "react";
import { getModalContext } from "../../context";
import { useFetch } from "../../hook";
import { getProviders } from "../../services";
import { getClients } from "../../services/clients";
import { Button } from "./components/Button/Button"
import { ModalAdd } from "./components/Modal/ModalAdd"
import { HomeStyled, HomeTitle } from "./Home.styled"

export const Home = () => {

  const { callEndPoint } = useFetch();
  const { handleOpen } = getModalContext();
  const [ data, setData ] = useState([])
  const [ modalType, setModalType ] = useState("");

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

  return (
    <HomeStyled>
      <HomeTitle>
        <h4>AGROINVERSIONES</h4>
        <h1>CUSCO</h1>
      </HomeTitle>
      <Button onClick={ () => handleClick("sale") }>Registrar venta</Button>
      <Button onClick={ () => handleClick("purchase") }>Registrar compra</Button>
      <ModalAdd data={data} modalType={modalType}/>
    </HomeStyled>
  )
}
