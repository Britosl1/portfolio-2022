import React from 'react'

import { ButtonContainerPrimary, ButtonContainerSecondary } from './styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
  title: string
  icon?: JSX.Element
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  secondary,
  title,
  icon,
  onClick,
  ...props
}) => {
  return !secondary ? (
    <ButtonContainerPrimary onClick={onClick} {...props}>
      {title} {icon}
    </ButtonContainerPrimary>
  ) : (
    <ButtonContainerSecondary onClick={onClick} {...props}>
      {title} {icon}
    </ButtonContainerSecondary>
  )
}

export default Button
