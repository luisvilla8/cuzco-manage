import {
  CloseButton,
  Title,
} from "../styled-components";
import { Input, Button } from ".";
import { RiCloseFill } from "react-icons/ri";
import { getModalContext } from "../context";
import { Modal } from "../components"
import { useFetch } from "../hook";
import { updateProduct } from "../services";
import { useState, useEffect } from "react";

export const ModalEdit = () => {

  const { handleClose, isOpen, type, rowData } = getModalContext();
  const { callEndPoint } = useFetch();
  const [ form, setForm ] = useState({
    nombre: rowData.nombre,
    descripcion: rowData.descripcion,
    cantidad: rowData.cantidad,
    costo: rowData.costo,
    precio: rowData.precio,
  });
  
  const esTemporal = async () => {
    let { data } = await callEndPoint(updateProduct(rowData.id, form));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setForm({
      nombre: rowData.nombre,
      descripcion: rowData.descripcion,
      cantidad: rowData.cantidad,
      costo: rowData.costo,
      precio: rowData.precio,
    })
  }, [rowData])
  
  if (!isOpen || type !== "edit") return <></>;
  
  return (
    <Modal>
      <Title>Editar crédito :</Title>
      <CloseButton onClick={handleClose}>
        <RiCloseFill />
      </CloseButton>
      <Input id="nombre" type="text" width="100%" value={form.nombre} handleChange={handleChange}>
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
      </Input>
      {/* <Input id="fechaCreacion" type="date" width="9rem" value={isoStringToYYYYMMDD(rowData.fechaCreacion)}>
        Fecha Creación
      </Input>
      <Input id="fechaPagado" type="date" width="9rem" value={isoStringToYYYYMMDD(rowData.fechaPagado)}>
        Fecha Pagado
      </Input> */}
      <Button type="edit" onClick={esTemporal}>Guardar Cambios</Button>
    </Modal>
  );
};
