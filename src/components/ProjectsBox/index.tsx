import React from 'react'
import RoundButton from '../RoundButton'

import { ProjectBoxContainer } from './styles'

interface IProjectsBoxProps {
  projectName: string
  stacks: { id: string; stack: string }[]
  url: string
  img: string
}

const ProjectsBox: React.FC<IProjectsBoxProps> = ({
  img,
  projectName,
  url,
  stacks,
}) => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <ProjectBoxContainer>
      <div>
        <h4>{projectName}</h4>
        <RoundButton onClick={() => openInNewTab(url)} />
      </div>
      <ul>
        {stacks.map((stack) => (
          <li key={stack.id}>{stack.stack}</li>
        ))}
      </ul>
      <img src={img} alt="" />
    </ProjectBoxContainer>
  )
}

export default ProjectsBox
