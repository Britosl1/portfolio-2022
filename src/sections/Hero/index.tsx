import React, { useState } from 'react'
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
import { theme } from '../../theme'
import ContactForm from '../../components/ContactForm'
import { motion, Variants } from 'framer-motion'

const heroVariant: Variants = {
  offscreen: {
    y: 800,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const Hero: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <HeroContainer id="about" variants={heroVariant}>
        <HeroLeftContainer>
          <h1>
            Hello! I'm a
            <h1 style={{ color: theme.primary.color }}>Front End Developer!</h1>
          </h1>
          <Button
            title={`Let's Talk!`}
            icon={<FiSend />}
            secondary
            onClick={() => setShow(!show)}
          />
          <IconsContainer>
            <p>Check Out My</p>
            <a
              href="https://www.linkedin.com/in/lucas-c-brito/"
              target="_blanck"
            >
              <RoundIcon icon={<AiFillLinkedin size={30} />} />
            </a>
            <a href="https://github.com/Britosl1/" target="_blanck">
              <RoundIcon icon={<AiFillGithub size={30} />} />
            </a>
          </IconsContainer>
        </HeroLeftContainer>
        <HeroRightContainer>
          <div id="octagon" />
          <img src={Img} alt="lucas-brito-img" />
        </HeroRightContainer>
        {show && <ContactForm onClose={() => setShow(!show)} />}
      </HeroContainer>
    </motion.div>
  )
}

export default Hero
