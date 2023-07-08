import React from 'react'

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
  return (
    <ProjectBoxContainer href={url} target="_blank">
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
    </ProjectBoxContainer>
  )
}

export default ProjectsBox
