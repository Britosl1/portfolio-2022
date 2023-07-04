import React, { useState } from 'react'
import Button from '../../components/Button'

import resume from '../../images/resume.pdf'

import { HeroContainer, HeroLeftContainer } from './styles'

import { FiSend } from 'react-icons/fi'
import { AiOutlineFilePdf } from 'react-icons/ai'
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
      bounce: 0.1,
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
      id="about"
    >
      <HeroContainer variants={heroVariant}>
        <HeroLeftContainer>
          <span>
            Hello! My name is
            <h1>
              Lucas Brito,
              <h1 style={{ color: theme.secondary.text }}>I'm a Developer!</h1>
            </h1>
          </span>
          <p>
            I work as a <span>Frontend Developer</span>. With almost three years
            of professional experience in the field, I'm always looking for new
            challenges!
          </p>
          <div className="button-container">
            <Button
              title={`Let's Talk!`}
              icon={<FiSend />}
              secondary
              onClick={() => setShow(!show)}
            />
            <Button
              title={`Check my resume!`}
              icon={<AiOutlineFilePdf />}
              secondary
              onClick={() => window.open(resume)}
            />
          </div>
          {/* <IconsContainer>
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
          </IconsContainer> */}
        </HeroLeftContainer>
        {/* <HeroRightContainer>
          <div id="octagon" />
          <img src={Img} alt="lucas-brito-img" />
        </HeroRightContainer> */}
        {show && <ContactForm onClose={() => setShow(!show)} />}
      </HeroContainer>
    </motion.div>
  )
}

export default Hero
