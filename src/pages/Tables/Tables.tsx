import { useEffect, useState } from "react";
import { useFetch } from "../../hook";
import { getAllCredits } from "../../services";
import { TableContainer } from "./styled-components";
import { Message, Table } from "./components";
import { ModalEdit, ModalDelete, Loader } from "../../components";

export const Tables = () => {
  const [ creditos, setCreditos ] = useState([]);
  const { loading, callEndPoint } = useFetch();

  const getCredits = async () => {
    let { data } = await callEndPoint(getAllCredits());
    setCreditos(data);
  };
  useEffect(() => {
    getCredits();
  }, []);

  return (
    <>
      {loading
        ? <Loader />
        : <TableContainer>
            <Table creditos={creditos} />
          </TableContainer>}
      {creditos.length === 0 && <Message>No encontramos registros</Message>}
      <ModalEdit />
      <ModalDelete />
    </>
  );
};
