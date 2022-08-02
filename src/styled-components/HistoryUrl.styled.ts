import { Link } from "react-router-dom"
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
  svg {
    padding: 0 .5rem;
    display: ${ p => p.isLast ? 'none' : 'inline'};
  }
`