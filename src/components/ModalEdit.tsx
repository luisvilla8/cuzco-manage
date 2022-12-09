import {
  CloseButton,
  Title,
} from "../styled-components";
import { Input, Button } from ".";
import { RiCloseFill } from "react-icons/ri";
import { getModalContext } from "../context";
import { Modal } from "../components"
import { useFetch } from "../hook";
import { fetchers } from "../services";
import { useState, useEffect } from "react";
import { useFields } from "../hook/useFields";

export const ModalEdit = () => {

  const { handleClose, isOpen, type, rowData } = getModalContext();
  const { callEndPoint } = useFetch();
  const [ form, setForm ] = useState({});
  const { currentFields, currentTableName: tableName } = useFields();
  
  const handleSave = async () => {
    let { data } = await callEndPoint(fetchers[tableName]["update"](rowData.id, form));
    console.log("data", data)
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
      {/* <Input id="nombre" type="text" width="100%" value={form.nombre} handleChange={handleChange}>
        Nombre
      </Input>
      <Input id="costo" type="number" icon="$" value={form.costo} handleChange={handleChange}>
        Costo
      </Input>
      <Input id="precio" type="number" icon="$" value={form.precio} handleChange={handleChange}>
        Precio
      </Input>
      <Input id="cantidad" type="number" icon="$" value={form.cantidad} handleChange={handleChange}>
        Cantidad
      </Input>
      <Input id="descripcion" type="textarea" width="100%" value={form.descripcion} handleChange={handleChange}>
        Descripción
      </Input> */}
      {/* <Input id="fechaCreacion" type="date" width="9rem" value={isoStringToYYYYMMDD(rowData.fechaCreacion)}>
        Fecha Creación
      </Input>
      <Input id="fechaPagado" type="date" width="9rem" value={isoStringToYYYYMMDD(rowData.fechaPagado)}>
        Fecha Pagado
      </Input> */}
      <Button type="edit" onClick={ handleSave }>Guardar Cambios</Button>
    </Modal>
  );
};
