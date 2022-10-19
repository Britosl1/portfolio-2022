import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme.primary.color};
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 60px;
    margin-bottom: 16px;
    width: 70%;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    h1 {
      font-size: 38px;
    }
  }
  .carousel-root {
    margin-top: 10px;
    height: 100%;
    width: 50%;
    align-self: center;
    .carousel-slider {
      padding: 20px;
    }
  }
`
