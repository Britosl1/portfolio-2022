import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme.primary.color};
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 44px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 720px) {
    padding: 30px;

    width: 100%;
    flex-direction: column;
    h1 {
      font-size: 38px;
    }
  }
`

export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  flex-basis: 30%;
`

export const SectionTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
`

export const SectionThree = styled.div`
  display: flex;
  flex-basis: 30%;
`
