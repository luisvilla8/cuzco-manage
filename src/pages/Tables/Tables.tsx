import { useEffect, useState } from 'react';
import { useFetch } from '../../hook'
import { getAllCredits } from '../../services';
import { TableContainer } from './styled-components';
import { Table } from './components';
import { ModalProvider, useModalContext } from '../../context';
import { ModalEdit, ModalDelete } from '../../components';

export const Tables = () => {
  const [ creditos, setCreditos ] = useState([]);
  const { callEndPoint } = useFetch()

  const getCredits = async () => {
    let { data } = await callEndPoint(getAllCredits())
    setCreditos( data );
  }

  useEffect(() => {
    getCredits()
  },[])

  return (
    <>
        <TableContainer>
          <Table creditos={creditos} />
        </TableContainer>
        <ModalEdit />
        <ModalDelete />
    </>
  )
}
