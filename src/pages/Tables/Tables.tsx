import { useEffect, useState } from 'react';
import { useFetch } from '../../hook'
import { getAllCredits } from '../../services';
import { TableContainer } from './styled-components';
import { Table } from './components';
import { ModalEditar } from '../../components';

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
        <Table creditos={creditos}/>
      </TableContainer>
      <ModalEditar />
    </>
  )
}
