import React from 'react'

import { RoundButtonContainer } from './styles'
import { BsArrowUpRight } from 'react-icons/bs'

interface IRoundButtonProps {
  onClick: () => void
}

const RoundButton: React.FC<IRoundButtonProps> = ({ onClick }) => {
  return (
    <RoundButtonContainer onClick={onClick}>
      <BsArrowUpRight size={20} />
    </RoundButtonContainer>
  )
}

export default RoundButton
