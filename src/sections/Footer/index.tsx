import React from 'react'
import {
  FooterContainer,
  BottomFooterContainer,
  TopFooterContainer,
  LeftFooterContainer,
  RightFooterContainer,
} from './styles'

import { DiReact } from 'react-icons/di'
import { SiTypescript, SiStyledcomponents } from 'react-icons/si'
import Button from '../../components/Button'
import ContactBox from '../../components/ContactBox'
import RoundIcon from '../../components/RoundIcon'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Footer: React.FC = () => {
  return (
    <FooterContainer id="contact">
      <TopFooterContainer>
        <LeftFooterContainer>
          <h1>Check out my contacts:</h1>
          <ContactBox
            type="Email"
            contact="lucasbrito.carneiro@gmail.com"
            icon={
              <RoundIcon icon={<AiOutlineMail size={26} />} whiteBackground />
            }
          />
          <ContactBox
            type="Phone"
            contact="+55 (31) 98785-4062"
            icon={
              <RoundIcon icon={<AiFillPhone size={26} />} whiteBackground />
            }
          />
          <ContactBox
            type="Location"
            contact="Belo Horizonte/MG - Brazil"
            icon={<RoundIcon icon={<GoLocation size={26} />} whiteBackground />}
          />
        </LeftFooterContainer>
        <RightFooterContainer>
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <textarea rows={3} />
          <Button title="Send" secondary onClick={() => {}} />
        </RightFooterContainer>
      </TopFooterContainer>
      <BottomFooterContainer>
        <p>
          Made with: <DiReact /> <SiTypescript /> <SiStyledcomponents />
        </p>
        <p>+55 31 98785-4062</p>
        <p>lucasbrito.carneiro@gmail.com</p>
      </BottomFooterContainer>
    </FooterContainer>
  )
}

export default Footer
