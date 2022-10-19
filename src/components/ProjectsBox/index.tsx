import React from 'react'
import img from '../../images/pp.jpeg'
import RoundButton from '../RoundButton'

import { ProjectBoxContainer } from './styles'

const ProjectsBox: React.FC = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <ProjectBoxContainer>
      <div>
        <h4>Projeto 1</h4>
        <RoundButton
          onClick={() =>
            openInNewTab(
              'https://react-icons.github.io/react-icons/search?q=arro'
            )
          }
        />
      </div>
      <p>React/Vue/TypeScript</p>
      <img src={img} alt="" />
    </ProjectBoxContainer>
  )
}

export default ProjectsBox
