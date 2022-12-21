import { ReactNode } from 'react';
import { AlertProvider, ModalProvider } from '../context'
import { AuthProvider } from '../context/AuthProvider'

type Props = {
  children: ReactNode;
}

export const GlobalProvider = ({ children }:Props) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <AlertProvider>
          { children }
        </AlertProvider>
      </ModalProvider>
    </AuthProvider>
  )
}
