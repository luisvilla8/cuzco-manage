// @ts-nocheck
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri"
import { Button, Input, Modal } from "../../../../components"
import { getModalContext } from "../../../../context";
import { CloseButton, Title } from "../../../../styled-components"
import { ProductCard } from "../ProductCard/ProductCard";

export const ModalAdd = ({ data = [] }) => {

  const { handleClose, isOpen } = getModalContext();
  const [ form, setForm ] = useState({
    cliente: 1,
    items: [],
  })

  const handleAddProduct = () => {
    setForm({...form, items: [...form.items, {}]})
  }

  const handleAdd = () => {
    console.log("add")
  }

  if (!isOpen) return <></>;

  return (
    <Modal>
      <Title>Agregar venta: </Title>
      <CloseButton>
        <RiCloseFill onClick={ handleClose } />
      </CloseButton>
      <Input name="Cliente" type="select" value={1} id="cliente" width="100%" handleChange={handleAdd} selectOptions={data}>
        Cliente
      </Input>
      <p>Productos</p>
      <button onClick={ handleAddProduct }>+</button>
      <ul>
        {
          form?.items.map( (product: any, index) => {
            return <ProductCard key={index}/>
          })
        }
      </ul>
      <div>
        <Button type="confirm" onClick={handleAdd}>Agregar</Button>
      </div>
    </Modal>
  )
}
