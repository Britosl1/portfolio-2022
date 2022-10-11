import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 30rem;
  padding: 30px 60px;
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  width: 50%;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  img {
    border-radius: 100%;
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
