import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AboutContainer = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  gap: 40px;
  span {
    color: ${({ theme }) => theme.button.link};
  }
  img {
    max-width: 320px;
    transition: ease-in-out 0.4s;
    position: relative;
    z-index: 1;
  }

  .img-container {
    background: linear-gradient(yellow 80%, yellow);
  }

  img:hover {
    outline: none;
    box-shadow: 10px 10px 0 0 ${(props) => props.theme.button.link};
    transform: translate(-5px, -5px);
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    /* height: auto; */

    img {
      max-width: 220px;
    }
  }
`
export const AboutLeftContainer = styled.div`
  border-top: 0.2px solid ${({ theme }) => theme.button.link};
  flex-grow: 40%;
  span {
    color: ${({ theme }) => theme.button.link};
  }
  p {
    margin: 20px 0px;
    text-align: justify;
  }
`
