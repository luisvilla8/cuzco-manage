import { ReactNode } from "react";
import { BackgroundModal, ModalStyled } from "../styled-components";

interface Prop {
  children: ReactNode;
}

export const Modal = ({ children }: Prop) => {

  return (
    <BackgroundModal>
      <ModalStyled>
        {children}
      </ModalStyled>
    </BackgroundModal>
  );

}
