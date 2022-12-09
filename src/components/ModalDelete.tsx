// @ts-nocheck
import {
  Message,
} from "../styled-components";
import { Button, Modal } from "../components";
import { getModalContext } from "../context";
import { useFetch, useFields } from "../hook";
import { fetchers } from "../services";

export const ModalDelete = () => {

  const { handleClose, isOpen, type, rowData } = getModalContext();
  const { callEndPoint } = useFetch();
  const { currentTableName: tableName } = useFields();

  if (!isOpen || type.type !== "delete") return <></>;

  const handleDelete = async () => {
    let { data } = await callEndPoint(fetchers[tableName]["delete"](rowData.id));
    console.log("data", data)
  }
  return (
    <Modal>
        <Message>¿Seguro(a) que quieres eliminar este registro?</Message>
        <Button type="confirm" onClick={ handleDelete }>Si, eliminar</Button>
        <Button type="cancel" onClick={handleClose}>No, cancelar</Button>
    </Modal>
  )
}
