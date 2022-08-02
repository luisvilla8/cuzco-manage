import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  isOpen: boolean;
}

export const NavbarStyled = styled.nav<Props>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  padding-left: 1rem;
  overflow: hidden;
  margin-right: 1rem;
  padding-bottom: .5rem;
  height: ${p => p.isOpen ? 'min-content' : '0rem'};
  width: calc(100% - 4rem);
  border-bottom: 1px solid ${p => p.isOpen 
    ? 'var(--primaryColor)' 
    : 'transparent'};
  border-radius: .5rem;
  background-color: var(--bgColor);
  transition: height var(--transition), background-color var(--transition);
  @media (min-width: 768px) {
    margin-bottom: 0rem;
    gap: 2rem;
    top: 0rem;
    position: relative;
    height: auto;
    flex-direction: row;
    justify-content: flex-end;
    border: none;
  }
`

export const NavGroupStyled = styled.section`
  h3 {
    font-size: .8rem;
    color: var(--textColor);
    display: inline;
  }
  svg {
    fill: var(--textColor);
    margin-right: .5rem;
  }
  div {
    display: flex;
    align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--textColor);
  padding: .3rem 1rem;
  gap: .5rem;
  font-size: .7rem;
  transition: color var(--transition), gap var(--transition);

  &:hover {
    color: var(--primaryColor);
  }
`