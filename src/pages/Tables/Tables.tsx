import { useEffect, useState } from "react";
import { useFetch } from "../../hook";
import { getProducts } from "../../services";
import { TableContainer } from "./styled-components";
import { Message, Table } from "./components";
import { ModalEdit, ModalDelete, Loader, Button, ModalAdd } from "../../components";
import { useLocation } from "react-router-dom";
import { getUrlInArray } from "../../util";
import { getModalContext } from "../../context";

export const Tables = () => {
  const [ products, setProducts ] = useState<Array<never>>([]);
  const { loading, callEndPoint } = useFetch();
  const { handleOpen } = getModalContext();
  const { pathname } = useLocation();
  const history = getUrlInArray(pathname);
  const tableName = history.at(-1)?.pathName;

  const handleGetProducts = async () => {
    let { data } = await callEndPoint(getProducts());
    setProducts(data.data);
  };
  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <>
      {loading
        ? <Loader />
        : <>
            <div>
              <Button type="add" onClick={ () => handleOpen("add", {}) }>
                +
              </Button>
            </div>
            <TableContainer>
              <Table data={products} />
            </TableContainer>
          </>
      }
      {products.length === 0 && <Message>No encontramos registros</Message>}
      <ModalAdd />
      <ModalEdit />
      <ModalDelete />
    </>
  );
};
