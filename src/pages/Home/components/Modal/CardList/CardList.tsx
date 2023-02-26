import { BillProduct } from "../../../../../models"
import { CardItem } from "./CardItem/CardItem"
import { CardListContainer } from "./CardList.styled"

type Props = {
  items: BillProduct[]
  removeProductFromBill: Function
}

export const CardList = ({ items, removeProductFromBill }:Props) => {
  return (
    <CardListContainer>
      { items.length > 0 ? items.map(item => <CardItem key={item.id} product={item} removeProductFromBill={removeProductFromBill}/>) : <p>No hay registros</p> }
    </CardListContainer>
  )
}
