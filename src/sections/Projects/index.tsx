import React from 'react'
import magalu from '../../images/magalu.png'
import carrefour from '../../images/carrefour.png'
import bestSongs from '../../images/best-songs.png'

import {
  ProjectsContainer,
  SectionOne,
  SectionTwo,
  SectionThree,
} from './styles'
import ProjectsBox from '../../components/ProjectsBox'
import { bestSongsStack, ninenineJobsStack } from './projectsData'

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionOne>
        <h1>Some projects!</h1>
        <ProjectsBox
          projectName="Magalu Recruiment Site"
          url="https://carreiras.magazineluiza.com.br/"
          img={magalu}
          stacks={ninenineJobsStack}
        />
      </SectionOne>
      <SectionTwo>
        <ProjectsBox
          projectName="Carrefour Recruiment Site"
          url="https://carrefour.99jobs.com/"
          img={carrefour}
          stacks={ninenineJobsStack}
        />
      </SectionTwo>
      <SectionThree>
        <ProjectsBox
          projectName="Best Songs - Full Stack"
          url="https://github.com/Britosl1/bestSongs-app"
          img={bestSongs}
          stacks={bestSongsStack}
        />
      </SectionThree>
    </ProjectsContainer>
  )
}

export default Projects
