import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Img from '../../images/pp.jpeg'

import { Carousel } from 'react-responsive-carousel'

import { ProjectsContainer } from './styles'

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <h1>Projects I've done and worked on</h1>
      <Carousel showThumbs={false}>
        <div>
          <h2>Teste Nome</h2>
          <img src={Img} alt="rw" />
        </div>
        <div>TEste2</div>
        <div>TEste3</div>
        <div>TEste4</div>
      </Carousel>
    </ProjectsContainer>
  )
}

export default Projects
