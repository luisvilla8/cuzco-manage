import {
  Message,
} from "../styled-components";
import { Button, Modal } from "../components";
import { useModalContext } from "../context";

export const ModalDelete = () => {

  const { handleClose, isOpen, type } = useModalContext();

  if (!isOpen || type !== "delete") return <></>;

  const esTemporal = () => {
    console.log("cambia esta función")
  }
  return (
    <Modal>
        <Message>¿Seguro(a) que quieres eliminar este registro?</Message>
        <Button type="acept" onClick={esTemporal}>Si, eliminar</Button>
        <Button type="cancel" onClick={handleClose}>No, cancelar</Button>
    </Modal>
  )
}
