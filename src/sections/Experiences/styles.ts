import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ExperiencesContainer = styled(motion.section)`
  display: flex;
  height: 100vh;
  align-items: center;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    /* height: auto; */
  }
`

export const ExperiencesLeftContainer = styled.div`
  /* width: 50%; */
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
    h1 {
      text-align: center;
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
  margin: 20px 0px;
  display: flex;
  gap: 10px;
  button {
    cursor: pointer;
    padding: 6px 8px;
    border: 1px solid ${({ theme }) => theme.primary.text};
    color: ${({ theme }) => theme.button.link};
    font-weight: 700;
    background-color: transparent;
    margin-bottom: 14px;
    font-size: 16px;
  }
  button:hover {
    border: 1px solid ${({ theme }) => theme.primary.text};
    color: #0a192f;
    background-color: ${({ theme }) => theme.primary.text};
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
