import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FooterContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    height: 100%;
    padding: 30px;
  }
`

export const TopFooterContainer = styled.div`
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LeftFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 10px 10px;
  h1 {
    font-size: 44px !important;
    margin-bottom: 30px !important;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
      font-size: 38px !important;
    }
    p {
      font-size: 16px !important;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 10px;
  }
`

export const RightFooterContainer = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 720px) {
    width: 100%;
    display: none;
  }
`

export const BottomFooterContainer = styled.div`
  border-top: 2px solid black;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  margin-bottom: 0px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    @media screen and (max-width: 720px) {
      margin-bottom: 8px;
    }
  }
`
