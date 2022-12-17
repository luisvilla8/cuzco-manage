// @ts-nocheck
import { useState } from "react";
import { Button, Input, Modal } from "../../../../components"
import { getModalContext } from "../../../../context";
import { ModalTransaction } from "./ModalTransaction/ModalTransaction";
import { ModalProduct } from "./ModalProduct";

export const ModalAdd = ({ data = [], modalType = "" }) => {

  const { isOpen, isSubOpen, openSubModal, closeSubModal } = getModalContext();
  const [ form, setForm ] = useState({
    agente: 0,
    montoPagado: 0,
    items: [],
  })

  const handleAddProduct = (item) => {
    const newForm = {...form, items: [...form.items, item]}
    setForm(newForm)
    closeSubModal();
  }

  if (!isOpen) return <></>;
  
  return (
    <Modal>
      {isSubOpen 
        ? <ModalProduct handleAddProduct={handleAddProduct}/> 
        : <ModalTransaction openSubModal={openSubModal} data={data} form={form} setForm={setForm} modalType={modalType}/>}
    </Modal>
  )
}
