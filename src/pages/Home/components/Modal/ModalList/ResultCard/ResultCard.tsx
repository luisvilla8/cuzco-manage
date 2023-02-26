import { ResultItem } from "../../../../../../models"
import { Container, LeftText, RightText, TopText } from "./ResultCard.styled"

type Props = {
  item: ResultItem
  onClick: Function
}

export const ResultCard = ({ item, onClick }: Props) => {
  return (
    <Container onClick={ () => onClick(item) }>
      <TopText>{ item.topText }</TopText>
      <LeftText>{ item.leftText }</LeftText>
      <RightText>{ item.rightText }</RightText>
    </Container>
  )
}
