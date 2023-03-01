import { useBillContext } from "../../../../../../context/BillProvider"
import { BillProduct, EventListener } from "../../../../../../models"
import { FieldGroup, PriceSectionContainer } from "./PriceSection.styled"

type Props = {
  items: BillProduct[]
}

export const PriceSection = ({ items }:Props) => {

  const { finalPrices, saveFinalPrices } = useBillContext()

  const handleChangeIGV = (evt: EventListener) => {
    const newIgv = evt?.target?.value
    if(newIgv === null || newIgv === undefined) return
    calculateFinalPrices(Number(newIgv))
  }

  const calculateFinalPrices = (newIgv: number) => {
    const newFinalPrices = {
      ...finalPrices, total: (finalPrices.subTotal * newIgv / 100) + finalPrices.subTotal , igv: Math.ceil(newIgv)
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
        <span>S/ {Math.ceil((finalPrices.igv / 100 * finalPrices.subTotal)).toFixed(2)}</span>
      </FieldGroup>
      <input type="range" min="0" max="100" step="1" value={finalPrices.igv} onChange={ (e) => handleChangeIGV(e) }/>
      <FieldGroup>
        <p>Total</p>
        <span>S/ {(finalPrices.total).toFixed(2)}</span>
      </FieldGroup>
    </PriceSectionContainer>
  )
}
