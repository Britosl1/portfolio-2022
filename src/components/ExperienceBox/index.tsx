import React from 'react'

import {
  ExperienceBoxContainer,
  ExperienceInfoContainer,
  ExperienceCompanyContainer,
} from './styles'

interface IExperienceBoxProps {
  startDate: string
  endDate: string
  role: string
  company: string
}

const ExperienceBox: React.FC<IExperienceBoxProps> = ({
  startDate,
  endDate,
  role,
  company,
}) => {
  return (
    <ExperienceBoxContainer>
      <ExperienceInfoContainer>
        <p className="date-container">
          {startDate} - {endDate}
        </p>
        <ExperienceCompanyContainer>
          <h4>{role}</h4>
          <p>{company}</p>
        </ExperienceCompanyContainer>
      </ExperienceInfoContainer>
    </ExperienceBoxContainer>
  )
}

export default ExperienceBox
