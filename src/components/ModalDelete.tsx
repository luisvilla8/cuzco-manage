import {
  Message,
} from "../styled-components";
import { Button, Modal } from "../components";
import { getModalContext } from "../context";
import { useFetch } from "../hook";
import { deleteProduct } from "../services";

export const ModalDelete = () => {

  const { handleClose, isOpen, type, rowData } = getModalContext();
  const { callEndPoint } = useFetch();

  if (!isOpen || type !== "delete") return <></>;

  const esTemporal = async () => {
    let { data } = await callEndPoint(deleteProduct(rowData.id));
  }
  return (
    <Modal>
        <Message>¿Seguro(a) que quieres eliminar este registro?</Message>
        <Button type="add" onClick={esTemporal}>Si, eliminar</Button>
        <Button type="cancel" onClick={handleClose}>No, cancelar</Button>
    </Modal>
  )
}
