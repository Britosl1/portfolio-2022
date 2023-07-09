import React from 'react'

import { ProjectBoxContainer } from './styles'
import { FiExternalLink } from 'react-icons/fi'

interface IProjectsBoxProps {
  projectName: string
  stacks: { id: string; stack: string }[]
  url: string
  img: string
}

const styleURL = { color: '#64ffda', fontSize: '1.7em', marginLeft: '10px' }

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
          <div className="icon-container">
            <FiExternalLink style={styleURL} />
          </div>
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
