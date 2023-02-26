import { ReactNode } from "react";
import { getModalContext } from "../context";
import { BackgroundModal, ModalStyled } from "../styled-components";

interface Prop {
  children: ReactNode;
  handleCloseModal?: Function
}

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>

export const Modal = ({ children, handleCloseModal }: Prop) => {

  const { handleClose } = getModalContext();

  const handleBlurModalClose = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.tagName === "SECTION") {
      e.stopPropagation()
      handleClose();
      if (handleCloseModal) handleCloseModal()
    } 
  }

  const closeModal = (e: Event) => {
    handleBlurModalClose(e)
  }

  return (
    <BackgroundModal onClick={ closeModal }>
      <ModalStyled>
        {children}
      </ModalStyled>
    </BackgroundModal>
  );

}
