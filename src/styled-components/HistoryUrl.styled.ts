import { Link } from "react-router-dom"
import styled from "styled-components"

interface Props {
  isLast: boolean;
}

export const HistoryUrl = styled.div`

`

export const HistoryPath = styled.p<Props>`
  color: ${ p => p.isLast ? 'white': 'var(--textColor)'};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  svg {
    padding: 0 .5rem;
    display: ${ p => p.isLast ? 'none' : 'inline'};
  }
`