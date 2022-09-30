import React from 'react'

import { NavBarContainer } from './styles'

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <ul>
        <li>
          <a href="#about"> About</a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#experience"> Experience</a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </NavBarContainer>
  )
}

export default NavBar
