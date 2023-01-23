// @ts-nocheck
import { useEffect, useState } from "react";
import { useFetch } from "../../hook";
import { fetchers } from "../../services";
import { TableContainer } from "./styled-components";
import { Message, Table } from "./components";
import { ModalEdit, ModalDelete, Button, ModalAdd, Loading } from "../../components";
import { getModalContext } from "../../context";
import { useLocation } from "react-router-dom";
import { getCurrentTableName } from "../../util";

const PRODUCTS_TABLE_NAME = "productos";
const MEASURE_TYPE_TABLE_NAME = "tiposMedida";

export const Tables = () => {
  const [ tableData, setTableData ] = useState<Array<never>>([]);
  const [ selectDataSource, setSelectDataSource ] = useState<Array<never>>([]);
  const { loading, callEndPoint } = useFetch();
  const { handleOpen } = getModalContext();

  const { pathname } = useLocation();
  const tableName = getCurrentTableName(pathname);
  const handleGetTableData = async () => {
    const someObj = {}
    let { data } = await callEndPoint(fetchers[tableName as keyof typeof someObj]["get"]());
    if ( tableName === PRODUCTS_TABLE_NAME) {
      const measureTypes = await fetchMeasureTypes();
      const selectDataSource = formatMeasureTypesToSelectDataSource(measureTypes);
      setSelectDataSource(selectDataSource)
      const syncedProducts = syncProductsWithMeasureTypes(data.data, measureTypes);
      return setTableData(syncedProducts);
    }
    setTableData(data.data);
  };

  const formatMeasureTypesToSelectDataSource = (measureTypes: any) => {
    return measureTypes.map((measureType: any) => {
      return {
        id: measureType.id,
        value: measureType.prefijo,
        nombre: measureType.nombre,
      }
    })
  }

  const fetchMeasureTypes = async () => {
    let { data } = await callEndPoint(fetchers[MEASURE_TYPE_TABLE_NAME]["get"]());
    return data.data;   
  }

  const syncProductsWithMeasureTypes = (products: any, measureTypes) => {
    const syncedProducts = products.map((product: any) => {
      const id_tipo_medida = product.id_tipo_medida;
      const measureType = findMeasureTypeById(id_tipo_medida, measureTypes);
      return {
        ...product,
        tipoMedidaPrefijo: measureType.prefijo,
        tipoMedidaNombre: measureType.nombre,
      }
    })
    return syncedProducts;
  }

  const findMeasureTypeById = (id: number, measureTypes: any) => {
    return measureTypes.find((measureType: any) => measureType.id === id);
  }

  useEffect(() => {
    handleGetTableData();
  }, [tableName]);

  return (
    <>
      {loading
        ? <Loading />
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
      <ModalAdd handleGetTableData={handleGetTableData} selectDataSource={selectDataSource}/>
      <ModalEdit handleGetTableData={handleGetTableData} selectDataSource={selectDataSource}/>
      <ModalDelete handleGetTableData={handleGetTableData}/>
    </>
  );
};
