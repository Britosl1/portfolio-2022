import React, { useState } from 'react'
// import { motion } from 'framer-motion'

import {
  NavigationMobileContainer,
  TopNavigationMobileContainer,
} from './styles'

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { theme } from '../../theme'

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: '-100%' },
// }

const NavigationMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <TopNavigationMobileContainer>
      <FiMenu
        className="icon"
        size={'40px'}
        color={theme.primary.text}
        onClick={() => setOpen(!open)}
        style={{ left: 20, top: 10, position: 'absolute' }}
      />
      {open && (
        <NavigationMobileContainer
          onClick={() => setOpen(!open)}
          animate={{ x: 400 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        >
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
