import React from 'react'
import ExperienceBox from '../../components/ExperienceBox'
import RoundIcon from '../../components/RoundIcon'
import { experienceData } from './experienceData'

import { motion, Variants } from 'framer-motion'
import { SiJavascript, SiMongodb, SiReact, SiTypescript } from 'react-icons/si'
import { FaNodeJs, FaVuejs } from 'react-icons/fa'
import {
  ExperiencesContainer,
  ExperiencesLeftContainer,
  ExperiencesRightContainer,
  SkillsContainer,
  SkillsIconsContainer,
} from './styles'

const experiencesVariant: Variants = {
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

const Experiences: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="experience"
    >
      <ExperiencesContainer id="experience" variants={experiencesVariant}>
        <ExperiencesLeftContainer>
          <h1>Skills & Experience</h1>
          <p>Former B2B Sales Manager, now working as a Front End Developer</p>
          <SkillsContainer>
            <h2>Skills</h2>
            <SkillsIconsContainer>
              <RoundIcon icon={<SiJavascript size={22} />} />
              <RoundIcon icon={<SiTypescript size={22} />} />
              <RoundIcon icon={<SiReact size={22} />} />
              <RoundIcon icon={<FaVuejs size={22} />} />
              <RoundIcon icon={<FaNodeJs size={22} />} />
              <RoundIcon icon={<SiMongodb size={22} />} />
            </SkillsIconsContainer>
          </SkillsContainer>
        </ExperiencesLeftContainer>
        <ExperiencesRightContainer>
          {experienceData.map((exp) => (
            <ExperienceBox
              key={exp.id}
              startDate={exp.startDate}
              endDate={exp.endDate}
              company={exp.company}
              role={exp.role}
            />
          ))}
        </ExperiencesRightContainer>
      </ExperiencesContainer>
    </motion.div>
  )
}

export default Experiences
