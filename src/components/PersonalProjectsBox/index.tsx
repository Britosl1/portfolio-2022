import React from 'react'

import { PersonalProjectsBoxContainer } from './styles'

import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface IPersonalProjectsBoxProps {
  projectName: string
  stacks: { id: string; stack: string }[]
  url: string
  img: string
  gitHub?: string
  bio: string
}

const style = { color: '#64ffda', fontSize: '1.5em' }
const styleURL = { color: '#64ffda', fontSize: '1.7em' }

const PersonalProjectsBox: React.FC<IPersonalProjectsBoxProps> = ({
  img,
  projectName,
  url,
  stacks,
  bio,
  gitHub,
}) => {
  return (
    <PersonalProjectsBoxContainer>
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
        <p>{bio}</p>
        <div className="icons-container">
          <a href={gitHub} target="_blank" rel="noreferrer">
            <FiGithub style={style} />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FiExternalLink style={styleURL} />
          </a>
        </div>
      </div>
    </PersonalProjectsBoxContainer>
  )
}

export default PersonalProjectsBox
