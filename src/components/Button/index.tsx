import React from 'react'

import { ButtonContainerPrimary, ButtonContainerSecondary } from './styles'

interface IButtonProps {
  secondary?: boolean
  title: string
  icon?: JSX.Element
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({
  secondary,
  title,
  icon,
  onClick,
}) => {
  return !secondary ? (
    <ButtonContainerPrimary onClick={onClick}>
      {title} {icon}
    </ButtonContainerPrimary>
  ) : (
    <ButtonContainerSecondary onClick={onClick}>
      {title} {icon}
    </ButtonContainerSecondary>
  )
}

export default Button
