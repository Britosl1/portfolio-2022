import React from 'react'

import { ContactBoxContainer, ContactBoxInfoContainer } from './styles'

interface IContactBoxProps {
  icon?: JSX.Element
  type: string
  contact: string
}

const ContactBox: React.FC<IContactBoxProps> = ({ contact, icon, type }) => {
  return (
    <ContactBoxContainer>
      {icon}
      <ContactBoxInfoContainer>
        <p>{type}</p>
        <h4>{contact}</h4>
      </ContactBoxInfoContainer>
    </ContactBoxContainer>
  )
}

export default ContactBox
