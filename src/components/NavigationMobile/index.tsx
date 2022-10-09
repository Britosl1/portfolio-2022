import React, { useState } from 'react'

import {
  NavigationMobileContainer,
  TopNavigationMobileContainer,
} from './styles'

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { theme } from '../../theme'

const NavigationMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <TopNavigationMobileContainer>
      <FiMenu
        className="icon"
        size={'40px'}
        color={theme.primary.color}
        onClick={() => setOpen(!open)}
        style={{ left: 20, top: 10, position: 'absolute' }}
      />
      {open && (
        <NavigationMobileContainer onClick={() => setOpen(!open)}>
          <ul>
            <li className="first-child-li">
              <a href="#about"> About</a>
              <AiOutlineClose
                size={'20px'}
                color={theme.primary.text}
                onClick={() => setOpen(!open)}
              />
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
        </NavigationMobileContainer>
      )}
    </TopNavigationMobileContainer>
  )
}

export default NavigationMobile
