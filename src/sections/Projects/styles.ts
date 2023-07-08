import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  h1 {
    margin-bottom: 16px;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.button.link};
    }
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    flex-direction: column;
    margin: 280px 0px 80px;
  }
`

// export const SectionOne = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0px 10px;
//   flex-basis: 30%;
// `

// export const SectionTwo = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-basis: 30%;
// `

// export const SectionThree = styled.div`
//   display: flex;
//   flex-basis: 30%;
// `
