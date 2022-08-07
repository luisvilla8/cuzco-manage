import {
  BackgroundModal,
  Message,
  ModalStyled,
} from "../styled-components";
import { Button } from "../components";

export const ModalDelete = () => {
  return (
    <BackgroundModal>
      <ModalStyled>
        <Message>¿Seguro(a) que quieres eliminar este registro?</Message>
        <Button type="acept">Si, eliminar</Button>
        <Button type="cancel">No, cancelar</Button>
      </ModalStyled>
    </BackgroundModal>
  )
}
