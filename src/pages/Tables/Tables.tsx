import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../../hook'
import { getAllCredits } from '../../services';
import { columnCredito } from './columns';
import { useTable } from 'react-table'
import { TableBody, TableContainer, TableHead } from './styled-components';

export const Tables = () => {
  const [ creditos, setCreditos ] = useState([]);
  const { callEndPoint } = useFetch()

  const getCredits = async () => {
    let { data } = await callEndPoint(getAllCredits())
    setCreditos( data );
  }
  
  useEffect(() => {
    getCredits()
  },[])

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
    <TableContainer>
      <table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </TableBody>
      </table>
    </TableContainer>
  )
}
