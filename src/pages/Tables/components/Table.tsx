import { useMemo } from "react";
import { useTable } from "react-table";
import { columnCredito } from "../columns";
import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"

interface Props {
  creditos: never[];
}

export const Table = ({ creditos }: Props) => {

  const columns = useMemo( () => columnCredito, [] );
  const data = useMemo( () => creditos, [creditos] );
  const tableInstance = useTable({ columns, data })
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
