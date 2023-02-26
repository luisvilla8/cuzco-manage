import { RiCloseFill } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { Loading, Modal } from "../../../../../components"
import { ResultItem } from "../../../../../models"
import { CloseButton, Title } from "../../../../../styled-components"
import { Search } from "./ModalList.styled"
import { ResultCard } from "./ResultCard/ResultCard"

type Props = {
  data: ResultItem[] | []
  isOpen: boolean
  closeModal: Function
  title: string
  isLoading: boolean
  handleClick: Function
}

export const ModalList = ({ data, isOpen, closeModal, title, isLoading, handleClick }: Props) => {

  if (!isOpen) return <></>

  return (
    <Modal handleCloseModal={closeModal}>
      <Title align="center">{ title }</Title>
      <CloseButton>
        <RiCloseFill onClick={ () => closeModal() } />
      </CloseButton>
      <Search>
        <FiSearch />
        <input type="text" placeholder={`Busca ${title.toLowerCase()}`}/>
        <span>{data.length} resultados</span>
      </Search>
      { !isLoading ? data.map((item) => <ResultCard item={item} key={item.id} onClick={handleClick}/>) : <Loading inLogin={true}/> }
    </Modal>
  )
}
