import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  isOpen: boolean;
}

export const Nav = styled.nav<Props>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: fixed;
  top: 6rem;
  overflow: hidden;
  height: ${p => p.isOpen ? '5rem' : '0rem'};
  width: calc(100% - 4rem);
  border-bottom: 1px solid ${p => p.isOpen 
    ? 'var(--primaryColor)' 
    : 'transparent'};
  border-radius: .5rem;
  transition: height .3s ease;
  @media (min-width: 768px) {
    top: 0rem;
    position: relative;
    height: auto;
    flex-direction: row;
    justify-content: flex-end;
    border: none;
  }
`

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--textColor);
  padding: .5rem 1rem;
  gap: .5rem;
  font-size: 1rem;
  list-style: none;
  transition: color .2s ease, gap .2s ease;

  &:hover {
    color: var(--primaryColor);
    gap: 1rem;
  }
`
 