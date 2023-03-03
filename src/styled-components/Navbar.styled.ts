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
  right: calc(var(--padding_container_x)/2);
  padding-left: 1rem;
  overflow: hidden;
  margin-right: 3rem;
  height: ${p => p.isOpen ? 'min-content' : '0rem'};
  padding: ${p => p.isOpen ? '.5rem 1rem' : '0rem'};
  width: clamp(5rem, 90vw, 10rem);
  border: 1px solid ${p => p.isOpen 
    ? 'var(--primaryColor)' 
    : 'transparent'};
  border-radius: .5rem;
  background-color: var(--bgColor);
  transition: height var(--transition), background-color var(--transition);

  & > span {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--textSecondColor);
    padding: .4rem 1rem;
    gap: .5rem;
    font-size: .7rem;
    transition: color var(--transition), gap var(--transition);
    cursor: default;
    &:hover {
      color: var(--textColor);
    }
  }
`

export const NavGroupStyled = styled.section`
  margin: .5rem 0;
  width: 100%;
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
    margin: 1rem 0 0;
    padding: 0;
  }
  li {
    list-style: none;
    border-radius: .25rem;
    transition: background-color .3s ease;
  }
  li:hover {
    background-color: var(--rowHover);
  }
`

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--textSecondColor);
  padding: .4rem 1rem;
  gap: .5rem;
  font-size: .7rem;
  transition: color var(--transition), gap var(--transition);

  &:hover {
    color: var(--textColor);
  }
`