import {
  CloseButton,
  Title,
} from "../styled-components";
import { Input, Button } from ".";
import { RiCloseFill } from "react-icons/ri";
import { useModalContext } from "../context";
import { Modal } from "../components"

export const ModalEdit = () => {

  const { handleClose, isOpen, type } = useModalContext();

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
      <Input id="montoTotal" type="number" icon="$">
        Monto Total
      </Input>
      <Input id="montoPagado" type="number" icon="$">
        Monto Pagado
      </Input>
      <Input id="titulo" type="text" width="100%">
        Título
      </Input>
      <Input id="cliente" type="text" width="100%">
        Cliente
      </Input>
      <Input id="fechaCreacion" type="date" width="9rem">
        Fecha Creación
      </Input>
      <Input id="fechaPagado" type="date" width="9rem">
        Fecha Pagado
      </Input>
      <Button type="acept" onClick={esTemporal}>Guardar Cambios</Button>
    </Modal>
  );
};
