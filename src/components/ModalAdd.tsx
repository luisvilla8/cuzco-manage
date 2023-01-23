// @ts-nocheck
import { useState } from "react";
import {
  CloseButton,
  Title,
} from "../styled-components";
import { Input, Button, Modal } from "../components";
import { RiCloseFill } from "react-icons/ri";
import { getAlertContext, getModalContext } from "../context";
import { useFetch, useFields } from "../hook";
import { fetchers } from "../services";

export const ModalAdd = ({ handleGetTableData, selectDataSource }) => {
  const { handleClose, isOpen, type } = getModalContext();
  const { handleOpen: handleOpenAlert } = getAlertContext()
  const { callEndPoint } = useFetch();
  const [ form, setForm ] = useState({});
  const { currentFields, currentTableName: tableName } = useFields();

  const handleAdd = async () => {
    let response = await callEndPoint(fetchers[tableName]["add"](form));
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

  if (!isOpen || type.type !== "add") return <></>;

  return (
    <Modal>
      <Title>Agregar {tableName} :</Title>
      <CloseButton>
        <RiCloseFill onClick={handleClose} />
      </CloseButton>
      {
        currentFields.map((field: any) => {
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
              selectOptions={selectDataSource}
            >
              {field.Header}
            </Input>
          )
        })
      }
      <div>
        <Button type="confirm" onClick={handleAdd}>Agregar</Button>
      </div>
    </Modal>
  );
};
