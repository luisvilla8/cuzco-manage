// @ts-nocheck
import { useEffect, useState } from "react";
import { useFetch } from "../../hook";
import { fetchers } from "../../services";
import { TableContainer } from "./styled-components";
import { Message, Table } from "./components";
import { ModalEdit, ModalDelete, Loader, Button, ModalAdd } from "../../components";
import { getModalContext } from "../../context";
import { useLocation } from "react-router-dom";
import { getCurrentTableName } from "../../util";

export const Tables = () => {
  const [ tableData, setTableData ] = useState<Array<never>>([]);
  const { loading, callEndPoint } = useFetch();
  const { handleOpen } = getModalContext();

  const { pathname } = useLocation();
  const tableName = getCurrentTableName(pathname);
  const handleGetTableData = async () => {
  const someObj = {}
    let { data } = await callEndPoint(fetchers[tableName as keyof typeof someObj]["get"]());
    setTableData(data.data);
  };
  useEffect(() => {
    handleGetTableData();
  }, []);

  return (
    <>
      {loading
        ? <Loader />
        : <>
            <div>
              <Button type="add" onClick={ () => handleOpen({ type: "add", table: tableName}, {}) }>
                +
              </Button>
            </div>
            <TableContainer>
              <Table data={tableData} tableName={tableName}/>
            </TableContainer>
          </>
      }
      {tableData.length === 0 && !loading && <Message>No encontramos registros</Message>}
      <ModalAdd />
      <ModalEdit />
      <ModalDelete />
    </>
  );
};
