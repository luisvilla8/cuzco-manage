import { ReactNode } from 'react'
import { ModalButton } from '../styled-components'

interface Props {
  children: ReactNode
  type: "cancel" | "edit" | "add";
  onClick: () => void;
}

export const Button = ({ children, type, onClick }: Props) => {

  return (
    <ModalButton 
      onClick={onClick}
      typeButton={ type }
    >{ children }</ModalButton>
  )
}
