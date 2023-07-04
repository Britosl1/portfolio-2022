import React from 'react'

import {
  ExperienceBoxContainer,
  ExperienceInfoContainer,
  ExperienceCompanyContainer,
} from './styles'

type ActivitiesProps = {
  id: string
  role: string
}

interface IExperienceBoxProps {
  startDate: string
  endDate: string
  role: string
  company: string
  activities: ActivitiesProps[]
}

const ExperienceBox: React.FC<IExperienceBoxProps> = ({
  startDate,
  endDate,
  role,
  company,
  activities,
}) => {
  return (
    <ExperienceBoxContainer>
      <ExperienceInfoContainer>
        <ExperienceCompanyContainer>
          <div className="company-container">
            <h4>{role} at</h4>
            <span>{company}</span>
          </div>
          <p className="date-container">
            {startDate} - {endDate}
          </p>
          <ul>
            {activities.map((activity) => (
              <li key={activity.id}>{activity.role}</li>
            ))}
          </ul>
        </ExperienceCompanyContainer>
      </ExperienceInfoContainer>
    </ExperienceBoxContainer>
  )
}

export default ExperienceBox
