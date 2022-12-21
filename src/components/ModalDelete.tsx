// @ts-nocheck
import {
  Message,
} from "../styled-components";
import { Button, Modal } from "../components";
import { getAlertContext, getModalContext } from "../context";
import { useFetch, useFields } from "../hook";
import { fetchers } from "../services";

export const ModalDelete = ({ handleGetTableData }) => {

  const { handleClose, isOpen, type, rowData } = getModalContext();
  const { handleOpen: handleOpenAlert } = getAlertContext()
  const { callEndPoint } = useFetch();
  const { currentTableName: tableName } = useFields();

  if (!isOpen || type.type !== "delete") return <></>;

  const handleDelete = async () => {
    let response = await callEndPoint(fetchers[tableName]["delete"](rowData.id));
    if (response.status !== 200) return handleOpenAlert("Eliminación fallida ...", "error")
    handleGetTableData();
    return handleOpenAlert("Eliminación hecha correctamente!", "success")
  }
  return (
    <Modal>
        <Message>¿Seguro(a) que quieres eliminar este registro?</Message>
        <Button type="confirm" onClick={ handleDelete }>Si, eliminar</Button>
        <Button type="cancel" onClick={handleClose}>No, cancelar</Button>
    </Modal>
  )
}
