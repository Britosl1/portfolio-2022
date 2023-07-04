import React, { useState } from 'react'

import { NavigationContainer } from './styles'

const Navigation: React.FC = () => {
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)
  return (
    <NavigationContainer scrolled={colorChange}>
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
