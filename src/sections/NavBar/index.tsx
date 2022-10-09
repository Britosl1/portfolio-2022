import React from 'react'
import Navigation from '../../components/Navigation'
import NavigationMobile from '../../components/NavigationMobile'

const NavBar: React.FC = () => {
  return (
    <>
      <Navigation />
      <NavigationMobile />
    </>
  )
}

export default NavBar
