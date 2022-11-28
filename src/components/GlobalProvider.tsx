import { ReactNode } from 'react';
import { ModalProvider } from '../context'
import { AuthProvider } from '../context/AuthProvider'

type Props = {
  children: ReactNode;
}

export const GlobalProvider = ({ children }:Props) => {
  return (
    <AuthProvider>
      <ModalProvider>
        { children }
      </ModalProvider>
    </AuthProvider>
  )
}
