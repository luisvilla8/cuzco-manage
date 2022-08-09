import { ReactNode } from 'react'
import { useModalContext } from '../context';
import { CancelButton, ModalButton } from '../styled-components'

interface Props {
  children: ReactNode
  type: string;
  onClick: () => void;
}

export const Button = ({ children, type, onClick }: Props) => {

  if(type === "cancel") return <CancelButton onClick={onClick}>{ children }</CancelButton>

  return (
    <ModalButton onClick={onClick}>{ children }</ModalButton>
  )
}
