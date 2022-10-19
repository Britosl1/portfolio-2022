import styled from 'styled-components'

export const ProjectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #000;
  width: 100%;
  padding-top: 20px;
  div {
    display: flex;
    /* margin-bottom: 6px; */
    align-items: center;
    h4 {
      font-size: 26px;
    }
  }

  p {
    font-size: 14px;
    color: grey;
    font-weight: 600;
    margin-bottom: 20px;
  }

  img {
    max-width: 200px;
  }
`
