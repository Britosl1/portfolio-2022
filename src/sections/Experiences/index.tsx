import React from 'react'
import ExperienceBox from '../../components/ExperienceBox'

import { ExperiencesContainer } from './styles'

const Experiences: React.FC = () => {
  return (
    <ExperiencesContainer id="experience">
      Experiences
      <ExperienceBox
        startDate="2020"
        endDate="2021"
        company="Empresa X"
        role="Front End"
      />
    </ExperiencesContainer>
  )
}

export default Experiences
