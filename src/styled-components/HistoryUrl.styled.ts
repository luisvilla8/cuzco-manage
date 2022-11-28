import styled from "styled-components"

interface Props {
  isLast: boolean;
}

export const HistoryUrl = styled.div`

`

export const HistoryPath = styled.p<Props>`
  color: ${ p => p.isLast 
    ? 'var(--textColor)'
    : 'var(--textSecondColor)'};
  font-weight: ${ p => p.isLast ? '600' : '400'};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 3rem;
  svg {
    display: ${ p => p.isLast ? 'none' : 'inline'};
    margin: 0 .5rem;
  }
`