import {
  BackgroundModal,
  CloseButton,
  ModalStyled,
  Title,
} from "../styled-components";
import { Input, Button } from ".";
import { RiCloseFill } from "react-icons/ri";

export const ModalEdit = () => {
  return (
    <BackgroundModal>
      <ModalStyled>
        <Title>Editar crédito :</Title>
        <CloseButton>
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
        <Button type="acept">Guardar Cambios</Button>
      </ModalStyled>
    </BackgroundModal>
  );
};
