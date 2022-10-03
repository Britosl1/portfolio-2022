import React from 'react'
import RoundIcon from '../../components/RoundIcon'
import { DiReact } from 'react-icons/di'

import { ProjectsContainer } from './styles'

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      Projects
      <RoundIcon icon={<DiReact size={35} />} whiteBackground />
    </ProjectsContainer>
  )
}

export default Projects
