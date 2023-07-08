import React from 'react'

import { PersonalProjectsBoxContainer } from './styles'

interface IPersonalProjectsBoxProps {
  projectName: string
  stacks: { id: string; stack: string }[]
  url: string
  img: string
}

const PersonalProjectsBox: React.FC<IPersonalProjectsBoxProps> = ({
  img,
  projectName,
  url,
  stacks,
}) => {
  return (
    <PersonalProjectsBoxContainer href={url} target="_blank">
      <img src={img} alt="" />
      <div className="info-container">
        <div>
          <h4>{projectName}</h4>
        </div>
        <ul>
          {stacks.map((stack) => (
            <li key={stack.id}>{stack.stack}</li>
          ))}
        </ul>
      </div>
    </PersonalProjectsBoxContainer>
  )
}

export default PersonalProjectsBox
