import React from 'react'

import { NavBarContainer } from './styles'

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </NavBarContainer>
  )
}

export default NavBar
