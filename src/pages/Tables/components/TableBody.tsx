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
  return (
    <TableBodyStyled {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              const { value } = cell;
              const { Header } = cell.column;
              return (
              <td {...cell.getCellProps()}>
                {Header === "Url Imagen" ? <picture><img src={value} alt={`${Header}`} /></picture> : 
                <p>
                  {cell.render("Cell")}
                </p>}
              </td>
            )})}
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
