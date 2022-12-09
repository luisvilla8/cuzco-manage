import { useState } from "react";
import {
  BackgroundModal,
  CloseButton,
  ModalStyled,
  Title,
} from "../styled-components";
import { Input, Button, Modal } from "../components";
import { RiCloseFill } from "react-icons/ri";
import { getModalContext } from "../context";
import { useFetch, useFields } from "../hook";
import { fetchers } from "../services";

export const ModalAdd = () => {
  const { handleClose, isOpen, type } = getModalContext();
  const { callEndPoint } = useFetch();
  const [ form, setForm ] = useState({});
  const { currentFields, currentTableName: tableName } = useFields();

  const handleAdd = async () => {
    let { data } = await callEndPoint(fetchers[tableName]["add"](form));
    console.log("data", data)
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
