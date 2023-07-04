import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ExperiencesContainer = styled(motion.section)`
  display: flex;
  height: 100vh;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`

export const ExperiencesLeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;

  p {
    font-weight: 900;
    width: 70%;
    line-height: 1.5;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    p {
      width: 100%;
    }
  }
`

export const ExperiencesRightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  justify-content: center;

  @media screen and (max-width: 769px) {
    width: 100%;
  }
`

export const SkillsContainer = styled.div`
  margin-top: 20px;
  h2 {
    font-weight: 800;
    margin-bottom: 14px;
  }
`

export const SkillsIconsContainer = styled.div`
  display: grid;
  row-gap: 10px;
  grid-template-columns: 20% 20% 20%;
  @media screen and (max-width: 769px) {
    justify-content: center;
    grid-template-columns: 30% 30% 30%;
  }
`
