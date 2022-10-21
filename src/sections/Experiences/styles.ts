import styled from 'styled-components'

export const ExperiencesContainer = styled.section`
  padding: 30px 60px;
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 30px;
  }
`

export const ExperiencesLeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  h1 {
    font-size: 44px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: grey;
    font-weight: 900;
    width: 70%;
    line-height: 1.5;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    h1 {
      font-size: 38px;
    }
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

  @media screen and (max-width: 720px) {
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
  @media screen and (max-width: 720px) {
    justify-content: center;
    grid-template-columns: 30% 30% 30%;
  }
`
