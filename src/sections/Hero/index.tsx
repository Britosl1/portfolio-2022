import React from 'react'
import Button from '../../components/Button'
import RoundIcon from '../../components/RoundIcon'
import Img from '../../images/pp.jpeg'

import {
  HeroContainer,
  HeroLeftContainer,
  HeroRightContainer,
  IconsContainer,
} from './styles'

import { FiSend } from 'react-icons/fi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView()
  }
  return (
    <HeroContainer id="about">
      <HeroLeftContainer>
        <h1>Hello! I'm a Front End Developer!</h1>
        <Button
          title={`Let's Talk!`}
          icon={<FiSend />}
          secondary
          onClick={scrollToContact}
        />
        <IconsContainer>
          <p>Check Out My</p>
          <a href="https://www.linkedin.com/in/lucas-c-brito/" target="_blanck">
            <RoundIcon icon={<AiFillLinkedin />} />
          </a>
          <a href="https://github.com/Britosl1/" target="_blanck">
            <RoundIcon icon={<AiFillGithub />} />
          </a>
        </IconsContainer>
      </HeroLeftContainer>
      <HeroRightContainer>
        <div id="octagon" />
        <img src={Img} alt="lucas-brito-img" />
      </HeroRightContainer>
    </HeroContainer>
  )
}

export default Hero
