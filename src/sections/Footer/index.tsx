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

const Footer: React.FC = () => {
  return (
    <FooterContainer id="contact">
      <TopFooterContainer>
        <LeftFooterContainer>
          <h1>Check out my contacts:</h1>
          <p>TETETEETE</p>
          <p>TETETEETE</p>
          <p>TETETEETE</p>
          <p>TETETEETE</p>
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
