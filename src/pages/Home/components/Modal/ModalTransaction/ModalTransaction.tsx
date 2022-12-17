import { CloseButton, Title } from "../../../../../styled-components"
import { ProductCard } from "../../ProductCard/ProductCard";
import { RiCloseFill } from "react-icons/ri";
import { Button, Input } from "../../../../../components";
import { getModalContext } from "../../../../../context";
import { ListProducts, ModalSubtitle, ModalTransactionContainer } from "./ModalTransaction.styled";
import { adapterTransactionToPost } from "../../../../../adapters/Transaction";
import { useFetch } from "../../../../../hook";
import { addSale } from "../../../../../services";
import { useState } from "react";
import { toFirstLetterUppercase } from "../../../../../util";

type Props = {
  openSubModal: () => void;
  data: [];
  form: {
    agente: number;
    montoPagado: number;
    items: [];
  }
  setForm: (form: any) => void;
  modalType: string;
}

export const ModalTransaction = ({ openSubModal, data, form, setForm, modalType }: Props) => {

  const [ currentTypeAgent, setCurrentTypeAgent ] = useState(modalType === "sale" ? "cliente" : "proveedor");
  const { handleClose } = getModalContext();
  const { callEndPoint } = useFetch();

  const handleClickClose = () => {
    handleClose();
  }

  const handleAdd = async () => {
    const adaptedForm = adapterTransactionToPost(form);
    const response = await callEndPoint(addSale(adaptedForm))
  }

  const handleEdit = (id: number, product: any) => {
    const filteredItems = form.items.filter((item: any) => item.producto !== id);
    const newForm = {...form, items: [...filteredItems, product]}
    setForm(newForm)
  }

  const handleDelete = (id: number) => {
    const filteredItems = form.items.filter((item: any) => item.producto !== id);
    const newForm = {...form, items: filteredItems}
    setForm(newForm)
  }

  const getTotalCost = () => {
    let total = 0;
    form.items.forEach((item: any) => {
      total += item.cantidadPedida * item.costo;
    })
    return total;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value),
    });
  }

  return (
    <ModalTransactionContainer>
      <Title>Agregar {modalType === "sale" ? "venta" : "compra"}: </Title>
      <CloseButton>
        <RiCloseFill onClick={ handleClickClose } />
      </CloseButton>
      <Input name="agente" type="select" value={form.agente} id="agente" width="100%" handleChange={handleChange} selectOptions={data}>
        {toFirstLetterUppercase(currentTypeAgent)}
      </Input>
      <ModalSubtitle>
        <span>
          Productos
        </span>
        <button onClick={openSubModal}>+</button>
      </ModalSubtitle>
      <ListProducts>
        {
          form?.items.length === 0 && <span>No hay productos agregados</span>
        }
        {
          form?.items.map((product: any, index) => {
            return <ProductCard key={index} product={product} handleEdit={handleEdit} handleDelete={handleDelete}/>
          })
        }
      </ListProducts>
      <ModalSubtitle>
        <span>
          Costo Total
        </span>
        <span>
          S/ {getTotalCost()}
        </span>
      </ModalSubtitle>
      <Input
        id="montoPagado"
        name="montoPagado"
        type="number"
        icon="S/"
        width="100%"
        value={form.montoPagado}
        handleChange={handleChange}
      >
        Monto pagado
      </Input>
      <div>
        <Button type="confirm" onClick={handleAdd}>Agregar</Button>
      </div>
    </ModalTransactionContainer>

  )
}

export default ModalTransaction