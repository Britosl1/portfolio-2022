import React from 'react'
import Navigation from '../../components/Navigation'
import NavigationMobile from '../../components/NavigationMobile'
import { NavBarContainer } from './styles'

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Navigation /> <NavigationMobile />
    </NavBarContainer>
  )
}

export default NavBar
