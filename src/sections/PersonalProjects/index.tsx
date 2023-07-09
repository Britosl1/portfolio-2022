import React from 'react'

import { ProjectsContainer } from './styles'
import { Variants, motion } from 'framer-motion'
import PersonalProjectsBox from '../../components/PersonalProjectsBox'
import { personalProjectsData } from './personalProjects'

const projectVariant: Variants = {
  offscreen: {
    y: 800,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.8,
    },
  },
}

const PersonalProjects: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="personal-projects"
    >
      <ProjectsContainer variants={projectVariant}>
        <h1>Some products I'm working on!</h1>
        {personalProjectsData.map((project) => (
          <PersonalProjectsBox
            key={project.id}
            projectName={project.name}
            url={project.url}
            img={project.img}
            stacks={project.stacks}
            bio={project.bio}
            gitHub={project.gitHub}
          />
        ))}
      </ProjectsContainer>
    </motion.div>
  )
}

export default PersonalProjects
