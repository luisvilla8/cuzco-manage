import {
  CloseButton,
  Title,
} from "../styled-components";
import { Input, Button } from ".";
import { RiCloseFill } from "react-icons/ri";
import { getModalContext } from "../context";
import { Modal } from "../components"
import { isoStringToYYYYMMDD } from "../util";

export const ModalEdit = () => {

  const { handleClose, isOpen, type, rowData } = getModalContext();

  if (!isOpen || type !== "edit") return <></>;

  const esTemporal = () => {
    console.log("cambia esta función")
  }
  
  return (
    <Modal>
      <Title>Editar crédito :</Title>
      <CloseButton onClick={handleClose}>
        <RiCloseFill />
      </CloseButton>
      <Input id="montoTotal" type="number" icon="$" value={rowData.montoTotal}>
        Monto Total
      </Input>
      <Input id="montoPagado" type="number" icon="$" value={rowData.montoPagado}>
        Monto Pagado
      </Input>
      <Input id="titulo" type="text" width="100%" value={rowData.titulo}>
        Título
      </Input>
      <Input id="cliente" type="text" width="100%" value={rowData.cliente}>
        Cliente
      </Input>
      <Input id="fechaCreacion" type="date" width="9rem" value={isoStringToYYYYMMDD(rowData.fechaCreacion)}>
        Fecha Creación
      </Input>
      <Input id="fechaPagado" type="date" width="9rem" value={isoStringToYYYYMMDD(rowData.fechaPagado)}>
        Fecha Pagado
      </Input>
      <Button type="edit" onClick={esTemporal}>Guardar Cambios</Button>
    </Modal>
  );
};
