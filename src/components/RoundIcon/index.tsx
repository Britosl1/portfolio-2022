import React from 'react'

import { RoundIconBlackContainer, RoundIconWhiteContainer } from './styles'

interface IRoundIconProps {
  icon: JSX.Element
  whiteBackground?: boolean
}

const RoundIcon: React.FC<IRoundIconProps> = ({ icon, whiteBackground }) => {
  return !whiteBackground ? (
    <RoundIconBlackContainer>{icon}</RoundIconBlackContainer>
  ) : (
    <RoundIconWhiteContainer>{icon}</RoundIconWhiteContainer>
  )
}

export default RoundIcon
