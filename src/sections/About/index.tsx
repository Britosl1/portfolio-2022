import React from 'react'

import { AboutContainer, AboutLeftContainer } from './styles'

import Img from '../../images/pp.jpeg'
import { motion, Variants } from 'framer-motion'

const AboutVariant: Variants = {
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

const About: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="about"
    >
      <AboutContainer variants={AboutVariant}>
        <AboutLeftContainer>
          <p>
            Hey there! I'm Lucas, a growth-oriented tech professional with a
            knack for challenges. With almost a decade of experience in the
            industry, I've helped numerous tech companies{' '}
            <span> achieve remarkable growth.</span>
          </p>
          <p>
            Previously, I worked in early-stage startups, where I played a
            pivotal role in expanding their operations. From developing sales
            structures and business models to training employees and negotiating
            with major clients, I've done it all. Thanks to these efforts, the
            startups I've worked with experienced exponential growth, with one
            particular company witnessing a
            <span> staggering 2000% increase in just a year.</span>
          </p>
          <p>
            In 2021, I decided to embark on a new adventure as a developer. Over
            the past almosr three years, I've worked on diverse projects
            encompassing various technologies. I'm well-versed in{' '}
            <span>
              {' '}
              JavaScript, TypeScript, React, React Native, VueJs, Jest, NextJs,
              NodeJs, PrismaORM, MongoDB, Postgres, Firebase, Docker, JQuery,{' '}
            </span>
            and more.
          </p>
          <p>
            In addition to my current job, I'm actively involved in personal
            projects and collaborate with other talented developers on a
            separate venture.
          </p>
        </AboutLeftContainer>
        <div className="img-container">
          <img src={Img} alt="lucas-brito-img" />
        </div>
      </AboutContainer>
    </motion.div>
  )
}

export default About
