import { useMemo } from "react";
import { useTable } from "react-table";
import { getFieldsByTableName } from "../columns";
import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"

interface Props {
  data: never[];
  tableName: string;
}

export const Table = ({ data, tableName }: Props) => {
  const columnProduct = getFieldsByTableName(tableName);
  const columns = useMemo( () => columnProduct, [] );
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
