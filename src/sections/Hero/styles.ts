import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroContainer = styled(motion.section)`
  height: 30rem;
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  @media screen and (max-width: 720px) {
    padding: 30px;
  }
  &:before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.primary.text};
    height: 400px;
    width: 400px;
    border-radius: 100%;
    right: 30px;
    z-index: -1;
    opacity: 0.5;
    overflow: hidden;
    @media screen and (max-width: 720px) {
      padding: 30px;
      opacity: 0.12;
    }
  }
`
export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px 0px;
  position: relative;
  h1 {
    font-size: 44px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    h1 {
      font-size: 44px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 300px) {
    h1 {
      font-size: 38px;
    }
  }
`

export const HeroRightContainer = styled.div`
  /* display: flex; */
  width: 50%;
  padding: 30px 0px;
  /* display: flex;
  justify-content: center; */
  img {
    border-radius: 100%;
    max-width: 250px;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: grey;
  font-weight: 700;
  position: absolute;
  bottom: 30px;
  width: 220px;
  @media screen and (max-width: 340px) {
    bottom: 0px;
    width: 200px;
    text-align: left;
  }
`
