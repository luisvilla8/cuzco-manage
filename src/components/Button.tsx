import { ReactNode } from 'react'
import { CancelButton, ModalButton } from '../styled-components'

interface Props {
  children: ReactNode
  type: string;
}

export const Button = ({ children, type }: Props) => {

  if(type === "cancel") return <CancelButton>{ children }</CancelButton>

  return (
    <ModalButton>{ children }</ModalButton>
  )
}
