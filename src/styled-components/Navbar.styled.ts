import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  height: 0rem;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--textColor);
  margin: 0 .5rem;
  padding: .5rem 1rem;
  font-size: .8rem;
`
 