import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroContainer = styled(motion.section)`
  height: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 769px) {
  }
`
export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.button.link};
  }
  p {
    margin: 20px 0px 25px;
  }
  .button-container {
    display: flex;
    gap: 30px;
  }
  @media screen and (max-width: 769px) {
    .button-container {
      flex-direction: column;
      gap: 10px;
      align-self: center;
    }
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: grey;
  font-weight: 700;
  position: absolute;
  bottom: 100px;
  width: 220px;
  @media screen and (max-width: 340px) {
    bottom: 0px;
    width: 200px;
    text-align: left;
  }
`
