import React from 'react'

import { NavigationContainer } from './styles'

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}

export default Navigation
