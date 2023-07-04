import React from 'react'
import {
  FooterContainer,
  BottomFooterContainer,
  TopFooterContainer,
  LeftFooterContainer,
} from './styles'

import { DiReact } from 'react-icons/di'
import { SiTypescript, SiStyledcomponents, SiFramer } from 'react-icons/si'
import ContactBox from '../../components/ContactBox'
import RoundIcon from '../../components/RoundIcon'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { motion, Variants } from 'framer-motion'

const footerVariant: Variants = {
  offscreen: {
    y: 800,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.8,
    },
  },
}

const Footer: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <FooterContainer id="contact" variants={footerVariant}>
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
              icon={
                <RoundIcon icon={<GoLocation size={26} />} whiteBackground />
              }
            />
          </LeftFooterContainer>
        </TopFooterContainer>
        <BottomFooterContainer>
          <p>
            Made with: <DiReact size={20} /> &nbsp;
            <SiTypescript size={14} />
            &nbsp;
            <SiStyledcomponents size={20} />
            &nbsp;
            <SiFramer size={14} />
          </p>
          <p>+55 31 98785-4062</p>
          <p>lucasbrito.carneiro@gmail.com</p>
        </BottomFooterContainer>
      </FooterContainer>
    </motion.div>
  )
}

export default Footer
