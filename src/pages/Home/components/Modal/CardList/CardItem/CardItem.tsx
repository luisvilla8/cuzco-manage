import { useEffect, useState } from "react"
import { RiCloseFill } from "react-icons/ri"
import { useBillContext } from "../../../../../../context/BillProvider"
import { BillProduct, EventListener } from "../../../../../../models"
import { CloseButton } from "../../../../../../styled-components"
import { CardItemContainer, CardItemName, CardItemPrice, CardItemQty, CardItemTotalPrice, QtyEditor } from "./CardItem.styled"

type Props = {
  product: BillProduct
  removeProductFromBill: Function
}

export const CardItem = ({ product, removeProductFromBill }:Props) => {

  const [qtySelected, setQtySelected] = useState<number>(1)
  const { billProducts, saveBillProducts } = useBillContext()

  const increaseQtySelected = () => {
    const newQtySelected = Number(qtySelected) + 1
    setQtySelected(newQtySelected)
  }

  const decreaseQtySelected = () => {
    if ( qtySelected === 1 ) return
    const newQtySelected = Number(qtySelected) - 1
    setQtySelected(newQtySelected)
  }

  const handleInputQtySelected = (evt: EventListener) => {
    const inputValue = evt.target?.value ?? ""
    if ( inputValue === "" ) return setQtySelected(1)
    setQtySelected(Number(inputValue))
  }

  const saveProductQtyToBill = () =>{
    const filteredBillProducts = billProducts.map(billProduct => {
      if (billProduct.id === product.id) {
        return { ...billProduct, cantidad: qtySelected, importe: qtySelected * billProduct.precioUnitario }
      }
      return billProduct
    })
    saveBillProducts(filteredBillProducts)
  }

  useEffect(() => {
    saveProductQtyToBill()
  }, [qtySelected])

  return (
    <CardItemContainer>
      <div>
        <CardItemName>{product.nombre}</CardItemName>
        <CardItemPrice>Precio U. <span>S/ {product.precioUnitario}</span></CardItemPrice>
        <CardItemQty>
          Cantidad 
          <QtyEditor>
            <button onClick={decreaseQtySelected}>-</button>
            <input type="number" value={qtySelected} onChange={handleInputQtySelected}/>
            <button onClick={increaseQtySelected}>+</button>
          </QtyEditor>
        </CardItemQty>
      </div>
      <div>
        <CloseButton>
          <RiCloseFill onClick={ () => removeProductFromBill(product) } />
        </CloseButton>
        <CardItemTotalPrice>S/ { product.precioUnitario * qtySelected }</CardItemTotalPrice>
      </div>
    </CardItemContainer>
  )
}
