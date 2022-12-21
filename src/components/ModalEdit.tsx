// @ts-nocheck
import {
  CloseButton,
  Title,
} from "../styled-components";
import { Input, Button } from ".";
import { RiCloseFill } from "react-icons/ri";
import { getAlertContext, getModalContext } from "../context";
import { Modal } from "../components"
import { useFetch } from "../hook";
import { fetchers } from "../services";
import { useState, useEffect } from "react";
import { useFields } from "../hook/useFields";

export const ModalEdit = ({ handleGetTableData }) => {

  const { handleClose, isOpen, type, rowData } = getModalContext();
  const { handleOpen: handleOpenAlert } = getAlertContext()
  const { callEndPoint } = useFetch();
  const [ form, setForm ] = useState({});
  const { currentFields, currentTableName: tableName } = useFields();
  
  const handleSave = async () => {
    let response = await callEndPoint(fetchers[tableName]["update"](rowData.id, form));
    if (response.status !== 200) return handleOpenAlert("Registro fallido ...", "error")
    handleGetTableData();
    return handleOpenAlert("Registro hecho correctamente!", "success")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    const newForm = currentFields.reduce((acc, field:any) => {
      return {...acc, [field.accessor]: rowData[field.accessor]};
    }, {});
    setForm(newForm)
  }, [rowData])
  
  if (!isOpen || type.type !== "edit") return <></>;
  
  return (
    <Modal>
      <Title>Editar {tableName} :</Title>
      <CloseButton onClick={handleClose}>
        <RiCloseFill />
      </CloseButton>
      {
        currentFields.map((field:any) => {
          return (
            <Input
              key={field.id}
              id={field.id}
              name={field.accessor}
              type={field.type}
              icon={field.icon}
              width={field.width}
              value={form[field.accessor]}
              handleChange={handleChange}
            >
              {field.Header}
            </Input>
          )
        })
      }
      <div>
        <Button type="edit" onClick={ handleSave }>Guardar Cambios</Button>
      </div>
    </Modal>
  );
};
