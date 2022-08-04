import { HeaderGroup } from "react-table";
import { TableHeadStyled } from "../styled-components";

interface Props {
  headerGroups: HeaderGroup<never>[];
}

export const TableHead = ({ headerGroups }: Props) => {
  return (
    <TableHeadStyled>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>
              {column.render('Header')}
            </th>
          ))}
          <th>...</th>
        </tr>
      ))}
    </TableHeadStyled>
  )
}
