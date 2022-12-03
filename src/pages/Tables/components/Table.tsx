import { useMemo } from "react";
import { useTable } from "react-table";
import { columnProduct } from "../columns";
import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"

interface Props {
  data: never[];
}

export const Table = ({ data }: Props) => {

  const columns = useMemo( () => columnProduct, [] );
  // const dataMemo = useMemo( () => data, [data] );
  const tableInstance = useTable({ columns, data })
  console.log("datatatata", data)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <TableHead headerGroups={headerGroups} />
      <TableBody
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
        rows={rows}
      />
    </table>
  )
}
