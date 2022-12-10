import { useState } from "react";
import { getModalContext } from "../../context";
import { useFetch } from "../../hook";
import { getClients } from "../../services/clients";
import { Button } from "./components/Button/Button"
import { ModalAdd } from "./components/Modal/ModalAdd"
import { HomeStyled, HomeTitle } from "./Home.styled"

export const Home = () => {

  const { callEndPoint } = useFetch();
  const { handleOpen } = getModalContext();
  const [ data, setData ] = useState([])

  const handleClick = async () => {
    const response = await callEndPoint(getClients())
    if (response.status === 200) {
      const { data } = response.data;
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
      <Button onClick={ () => handleClick() }>Registrar venta</Button>
      <Button onClick={ () => handleOpen({ type: "add"}, {}) }>Registrar compra</Button>
      <ModalAdd data={data}/>
    </HomeStyled>
  )
}
