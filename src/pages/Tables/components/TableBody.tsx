import { Row, TableBodyPropGetter, TableBodyProps } from "react-table";
import { TableBodyStyled } from "../styled-components";
import { RowButton } from "./RowButton";

interface Props {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<never> | undefined) => TableBodyProps;
  rows: Row<never>[];
  prepareRow:  (row: Row<never>) => void;
}

export const TableBody = ({ getTableBodyProps, rows, prepareRow }: Props) => {
  return (
    <TableBodyStyled {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
              <td {...cell.getCellProps()}>
                {cell.render('Cell')}
              </td>
            ))}
            <td>
              <RowButton type="edit">Editar</RowButton>
              <RowButton type="delete">Eliminar</RowButton>
            </td>
          </tr>
        )
      })}
    </TableBodyStyled>
  )
}
