import { useEffect, useState } from "react"
import { RiCloseFill } from "react-icons/ri";
import { CardButtons, CardCost, CardName, CardStyled } from "./ProductCard.styled"

type Props = {
  product: any;
  handleEdit: (id:number, item: any) => void;
  handleDelete: (id:number) => void;
}

export const ProductCard = ({ product, handleEdit, handleDelete }: Props) => {

  const handleDecrease = () => {
    const { producto, cantidadPedida } = product;
    if(cantidadPedida > 0) {
      const newCantidadPedida = cantidadPedida - 1;
      const costoFinal = product.costo * newCantidadPedida;
      const productEdited = {...product, cantidadPedida: newCantidadPedida, costoFinal}
      handleEdit(producto, productEdited)
    }
  }
  const handleIncrease = () => {
    const { producto, cantidadPedida } = product;
    const newCantidadPedida = cantidadPedida + 1;
    const costoFinal = product.costo * newCantidadPedida;
    const productEdited = {...product, cantidadPedida: newCantidadPedida, costoFinal}
    handleEdit(producto, productEdited)
  }

  return (
    <CardStyled>
      <CardName>{product.nombre}</CardName>
      <RiCloseFill onClick={ () => handleDelete(product.producto) } />
      <CardButtons>
        <button onClick={ handleDecrease }>-</button>
        <span>{product.cantidadPedida}</span>
        <button onClick={ handleIncrease }>+</button>
      </CardButtons>
      <CardCost>S/ {product.costoFinal}</CardCost>
    </CardStyled>
  )
}
