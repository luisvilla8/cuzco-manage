import React, { useState } from 'react'
import { NavGroupStyled } from '../styled-components'

interface Props {
  children: React.ReactNode;
  title: string;
  icon: React.ReactElement;
}

export const NavGroup = ({ title, icon, children}: Props) => {

  const [ isExpanded, setIsExpanded ] = useState(false)

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <NavGroupStyled>
      <div onClick={handleToggleExpanded}>
        {icon}<h3>{title}</h3>
      </div>
      {
        isExpanded && <ul>{children}</ul>
      }
    </NavGroupStyled>
  )
}
