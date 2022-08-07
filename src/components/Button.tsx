import { ReactNode } from 'react'
import { ModalButton } from '../styled-components'

interface Props {
  children: ReactNode
}

export const Button = ({ children }: Props) => {
  return (
    <ModalButton>{ children }</ModalButton>
  )
}
