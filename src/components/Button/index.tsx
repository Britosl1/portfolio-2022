import React from 'react'

import { ButtonContainerPrimary, ButtonContainerSecondary } from './styles'

interface IButtonProps {
  secondary?: boolean
  title: string
}

const Button: React.FC<IButtonProps> = ({ secondary, title }) => {
  return !secondary ? (
    <ButtonContainerPrimary>{title}</ButtonContainerPrimary>
  ) : (
    <ButtonContainerSecondary>{title}</ButtonContainerSecondary>
  )
}

export default Button
