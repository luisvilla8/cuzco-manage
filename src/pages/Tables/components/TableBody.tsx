import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import { Row, TableBodyPropGetter, TableBodyProps } from "react-table";
import { TableBodyStyled } from "../styled-components";
import { RowButton } from "./RowButton";

interface Props {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<never> | undefined
  ) => TableBodyProps;
  rows: Row<never>[];
  prepareRow: (row: Row<never>) => void;
}

export const TableBody = ({ getTableBodyProps, rows, prepareRow }: Props) => {
  console.count("render")
  return (
    <TableBodyStyled {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
            ))}
            <td>
              <RowButton type="edit" data={row.original}>
                <RiEdit2Line />
              </RowButton>
              <RowButton type="delete" data={row.original}>
                <RiDeleteBin2Line />
              </RowButton>
            </td>
          </tr>
        );
      })}
    </TableBodyStyled>
  );
};
