import { ReactNode } from "react";
import { getModalContext } from "../context";
import { BackgroundModal, ModalStyled } from "../styled-components";

interface Prop {
  children: ReactNode;
}

export const Modal = ({ children }: Prop) => {

  const { handleClose } = getModalContext();

  const handleBlurModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    const childElementLength = target.childNodes.length;
    if (childElementLength === 1) handleClose();
  }

  return (
    <BackgroundModal onClick={ handleBlurModalClose }>
      <ModalStyled>
        {children}
      </ModalStyled>
    </BackgroundModal>
  );

}
