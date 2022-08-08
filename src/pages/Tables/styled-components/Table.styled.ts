import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  border-radius: 1.2rem;
  overflow: hidden;
  margin: 1rem 0;
  @media (max-width:600px) {
    overflow-x: scroll;
  }
  table {
    border-spacing: inherit;
    width: 100%;
  }
  ::-webkit-scrollbar {
    height: .5rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 1rem;
    background: var(--rowColor);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: var(--rowColor2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primaryColor);
  }
`
export const TableHeadStyled = styled.thead`
  background-color: var(--primaryColor);
  border-radius: 1rem 0rem 0rem 1rem;
  color: #E8E8E8;
  th {
    padding: 1rem 0;
  }
  font-size: .7rem;
`
export const TableBodyStyled = styled.tbody`
  background-color: var(--rowColor);
  border-radius: 1rem 0rem 0rem 1rem;
  font-size: .7rem;
  transition: var(--transition);
  td {
    text-align: center;
    padding: .35rem .5rem;
    color: var(--textTableBody);
    height: 2rem;
  }
  tr:nth-child(even) {
    background-color: var(--rowColor2);
    transition: var(--transition);
  }
`