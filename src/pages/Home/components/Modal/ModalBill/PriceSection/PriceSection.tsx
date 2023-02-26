import { useBillContext } from "../../../../../../context/BillProvider"
import { BillProduct } from "../../../../../../models"
import { FieldGroup, PriceSectionContainer } from "./PriceSection.styled"

type Props = {
  items: BillProduct[]
}

export const PriceSection = ({ items }:Props) => {

  const { finalPrices, saveBillIGV, saveFinalPrices } = useBillContext()

  const handleChangeIGV = (evt: Event) => {
    const value = evt.target.value
    if(value === null || value === undefined) return
    calculateFinalPrices(Number(value))
  }

  const calculateFinalPrices = (newIgv: number) => {
    const newFinalPrices = {
      ...finalPrices, total: (finalPrices.subTotal * newIgv / 100) + finalPrices.subTotal , igv: newIgv
    }
    saveFinalPrices(newFinalPrices)
  }

  if(items.length === 0) return <></>

  return (
    <PriceSectionContainer>
      <FieldGroup>
        <p>Sub Total</p>
        <span>S/ {(finalPrices.subTotal).toFixed(2)}</span>
      </FieldGroup>
      <FieldGroup>
        <p>I.G.V. (%{finalPrices.igv})</p>
        <span>S/ {(finalPrices.igv / 100 * finalPrices.subTotal).toFixed(2)}</span>
      </FieldGroup>
      <input type="range" min="0" max="100" step="1" value={finalPrices.igv} onChange={ handleChangeIGV }/>
      <FieldGroup>
        <p>Total</p>
        <span>S/ {(finalPrices.total).toFixed(2)}</span>
      </FieldGroup>
    </PriceSectionContainer>
  )
}
