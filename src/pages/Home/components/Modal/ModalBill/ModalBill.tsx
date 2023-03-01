import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { Modal, PDFContainer, PDFDocument } from "../../../../../components";
import { PDFViewer } from '@react-pdf/renderer';
import { BillProduct, Client, Product, ResultItem, EventListener } from "../../../../../models";
import { CloseButton, SubTitle, Title } from "../../../../../styled-components";
import { ModalList } from "../ModalList/ModalList";
import { BodyContainer, CancelPreviewButton, FooterContainer, ListNumbers, PreviewButtonsContainer, SelectButton, SubContainer } from "./ModalBill.styled";
import { getClients, getProducts } from "../../../../../services"
import { useFetch } from "../../../../../hook";
import { Button } from "../../Button/Button";
import { adapterClientToResult, adapterGroupNumberToString, adapterProductToBillProduct, adapterProductToResult } from "../../../../../adapters";
import { useBillContext } from "../../../../../context/BillProvider";
import { CardList } from "../CardList/CardList";
import { PriceSection } from "./PriceSection/PriceSection";
import { getBlob } from "../../../../../util/pdfUtils";


type Props = {
  isOpen: boolean;
  closeModal: Function
  type: "BOLETA" | "FACTURA"
}

export const ModalBill = ({ isOpen, closeModal, type }: Props) => {

  const [ isModalClientListOpen, setIsModalClientListOpen ] = useState(false)
  const [ isModalProductListOpen, setIsModalProductListOpen ] = useState(false)
  const [ groupNumber, setGroupNumber ] = useState(["", "", "", "", "", "", "", "", ""])
  const [ isViewingPdf, setIsViewingPdf ] = useState(false)
  const [ isGroupNumberCompleted, setIsGroupNumberCompleted ] = useState("is_disabled")
  const [ formattedClients, setFormattedClients ] = useState<ResultItem[]>([])
  const [ formattedProducts, setFormattedProducts ] = useState<ResultItem[]>([])
  const { loading, callEndPoint } = useFetch();
  const { clients, saveClients, products, saveProducts, billProducts, saveClientToBill, saveProductToBill, saveBillProducts, billClient, finalPrices } = useBillContext()

  const openModalClientList = () => setIsModalClientListOpen(true)
  const closeModalClientList = () => setIsModalClientListOpen(false)

  const openModalProductList = () => setIsModalProductListOpen(true)
  const closeModalProductList = () => setIsModalProductListOpen(false)

  const addClientToBill = (clientSelected: ResultItem) => {
    const client = clients.find( client => client.id === clientSelected.id)
    if (client === undefined) return
    saveClientToBill(client)
    closeModalClientList()
  }
  const addProductToBill = (productSelected: ResultItem) => {
    const isAlreadyAdded = billProducts.find( product => product.id === productSelected.id )
    if (isAlreadyAdded) return
    const product = products.find( product => product.id === productSelected.id )
    if(product === undefined) return
    const adaptedProduct = adapterProductToBillProduct(product, 1)
    saveProductToBill(adaptedProduct)
  }
  const removeProductFromBill = (product: BillProduct) => {
    const newProducts = billProducts.filter( item => item.id !== product.id) 
    saveBillProducts(newProducts)
  }

  const fetchClients = async () => {
    openModalClientList()
    const { status, data } = await callEndPoint(getClients());
    if ( status === 200 ) {
      saveClients(data.data)
      const clientState = data.data.map((item:Client) => adapterClientToResult(item))
      setFormattedClients(clientState)
    }
  }

  const fetchProducts = async () => {
    openModalProductList()
    const { status, data } = await callEndPoint(getProducts());
    if ( status === 200 ) {
      saveProducts(data.data)
      const productState = data.data.map((item:Product) => adapterProductToResult(item))
      setFormattedProducts(productState)
    }
  }
  
  const handleDownloadPDF = async () => {
    const fileName = `${type.toLowerCase().replace(/^./, type[0].toUpperCase())}.pdf`
    const pdfComponent = <PDFDocument nBill={adapterGroupNumberToString(groupNumber)} client={billClient} products={billProducts} finalPrices={finalPrices} type={type}/>
    getBlob(pdfComponent, fileName)
  }

  const handleGroupNumber = (evt: EventListener, ind: number) => {
    const value = evt.target.value
    const newGroupNumber = groupNumber.map((el, index) => index === ind ? (value+"").slice(-1) : el)
    
    setGroupNumber(newGroupNumber)
    const elements = document.getElementsByClassName("inputNumber")
    const nextElement = elements[ind+1]
    handleIsGroupNumberCompleted(newGroupNumber)
    if (ind < 8 && value !== "") return (nextElement as HTMLElement).focus();
  }
  
  const handleBack = (evt: React.KeyboardEvent<HTMLInputElement>, ind:number) => {
    const elements = document.getElementsByClassName("inputNumber")
    if (ind > 0 && evt.keyCode === 8 && groupNumber[ind] === "") {
      const prevElement = elements[ind-1]
      return (prevElement as HTMLElement)?.focus();
    }
  }

  const handleIsGroupNumberCompleted = (groupNumber: string[]) => {
    const result = groupNumber.every( n => n !== "")
    const value = !result ? "is_disabled" : ""
    return setIsGroupNumberCompleted(value) 
  }

  if (!isOpen) return <></>

  return (
    <Modal handleCloseModal={closeModal}>
      <Title>Generar {type.toLowerCase().replace(/^./, type[0].toUpperCase())}</Title>
      <CloseButton>
        <RiCloseFill onClick={ () => closeModal() } />
      </CloseButton>
      <BodyContainer>
        <SubTitle>Nro° {type.toLowerCase().replace(/^./, type[0].toUpperCase())}</SubTitle>
        <ListNumbers>
          {
            [0,1,2,3,4,5,6,7,8].map(el => (
              <input 
                type="number" 
                key={el} 
                value={groupNumber[el]} 
                onChange={(e) => handleGroupNumber(e, el)}
                onKeyDown={(e) => handleBack(e, el)}
                placeholder="0" 
                className={groupNumber[el] !== "" ? "inputNumber isCompleted" : "inputNumber"}
              />
            ))
          }
        </ListNumbers>
        <SubTitle>Cliente</SubTitle>
        <SelectButton onClick={ fetchClients } isSelected={billClient.id !== 0}>
          { billClient.id !== 0 ? billClient.nombre :  "Selecciona un cliente ..."}
        </SelectButton>
        <SubContainer>
          <SubTitle>Productos</SubTitle>
          <Button onClick={ fetchProducts } type="primary">Agregar +</Button>
        </SubContainer>
        <CardList items={billProducts} removeProductFromBill={removeProductFromBill}/>
        <PriceSection items={billProducts}/>
      </BodyContainer>
      <FooterContainer>
        <button onClick={handleDownloadPDF} className={isGroupNumberCompleted}>Descargar {type.toLowerCase().replace(/^./, type[0].toUpperCase())}</button>
        <button onClick={ () => setIsViewingPdf(true) }>
          <AiFillEye />
        </button>
      </FooterContainer>
      <ModalList isOpen={isModalClientListOpen} closeModal={closeModalClientList} data={formattedClients} title="Clientes" isLoading={loading} handleClick={addClientToBill}/>
      <ModalList isOpen={isModalProductListOpen} closeModal={closeModalProductList} data={formattedProducts} title="Productos" isLoading={loading} handleClick={addProductToBill}/>
      {
        isViewingPdf &&
        <PDFContainer>
          <PDFViewer style={{ width:"70%", height:"80%" , margin:"4rem auto"}}>
            <PDFDocument nBill={adapterGroupNumberToString(groupNumber)} client={billClient} products={billProducts} finalPrices={finalPrices} type={type}/>
          </PDFViewer>
          <PreviewButtonsContainer>
            <CancelPreviewButton onClick={() => setIsViewingPdf(false)}>Cerrar</CancelPreviewButton>
            <CancelPreviewButton>Descargar PDF</CancelPreviewButton>
          </PreviewButtonsContainer>
        </PDFContainer>
      }
    </Modal>
  )
}
