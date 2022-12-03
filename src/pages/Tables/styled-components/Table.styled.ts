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
  background-color: var(--rowColor);
  border-radius: 1rem 0rem 0rem 1rem;
  color: var(--textColor);
  font-size: .8rem;
  th {
    padding: 1.5rem 2rem;
  }
  `
export const TableBodyStyled = styled.tbody`
  background: var(--rowColor2);
  border-radius: 1rem 0rem 0rem 1rem;
  font-size: .7rem;
  transition: var(--transition);
  td {
    text-align: center;
    color: var(--textTableBody);
    cursor: default;
  }
  tr {
    /* display: block; */
  }
  p {
    display: grid;
    place-items: center;
    padding: 1rem .5rem;
    overflow: hidden;
    max-height: 4rem;
    min-height: 4rem;
  }
  tr:nth-child(even) {
    background-color: var(--rowColor);
  }
  tr:hover {
    background-color: var(--rowHover);
  }
`