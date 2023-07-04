import React, { useEffect, useState } from 'react'
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
  const [company, setCompany] = useState(experienceData)

  const filterCompanies = (companyName: string) => {
    const filteredData = experienceData.filter(
      (company) => company.company === companyName
    )
    return setCompany(filteredData)
  }

  useEffect(() => {
    filterCompanies('Q4 Inc')
  }, [])

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="experience"
    >
      <ExperiencesContainer id="experience" variants={experiencesVariant}>
        <ExperiencesLeftContainer>
          <h1>Companies I've worked on!</h1>
          <SkillsContainer>
            <button onClick={() => filterCompanies('Q4 Inc')}>Q4 Inc</button>
            <button onClick={() => filterCompanies('99jobs')}>99Jobs</button>
            <button onClick={() => filterCompanies('DB1 Group')}>
              DB1 Group
            </button>
            <button onClick={() => filterCompanies('LeCupon')}>LeCupon</button>
          </SkillsContainer>
          {company.map((exp) => (
            <ExperienceBox
              key={exp.id}
              startDate={exp.startDate}
              endDate={exp.endDate}
              company={exp.company}
              role={exp.role}
              activities={exp.activities}
            />
          ))}
        </ExperiencesLeftContainer>
      </ExperiencesContainer>
    </motion.div>
  )
}

export default Experiences
