import React from 'react'

import { ProjectsContainer } from './styles'
import ProjectsBox from '../../components/ProjectsBox'
import { professionalProjects } from './projectsData'
import { Variants, motion } from 'framer-motion'

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

const Projects: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="projects"
    >
      <ProjectsContainer variants={projectVariant}>
        <h1>
          Professional Projects<span> (some of them)</span>
        </h1>
        {professionalProjects.map((project) => (
          <ProjectsBox
            key={project.id}
            projectName={project.name}
            url={project.url}
            img={project.img}
            stacks={project.stacks}
          />
        ))}
      </ProjectsContainer>
    </motion.div>
  )
}

export default Projects
