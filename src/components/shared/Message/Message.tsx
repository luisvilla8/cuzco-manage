import { getAlertContext } from "../../../context"
import { MessageContainer } from "./Message.styled"

export const Message = () => {

  const { isOpen, message, type } = getAlertContext()

  if (!isOpen) return <></>;

  return (
    <MessageContainer type={type}>{ message }</MessageContainer>
  )
}
