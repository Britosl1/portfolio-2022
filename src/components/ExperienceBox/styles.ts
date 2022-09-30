import styled from 'styled-components'

export const ExperienceBoxContainer = styled.div`
  border-top: 2px solid #000;
  width: 100%;
  height: 400px;
  padding: 16px 0px;
`

export const ExperienceInfoContainer = styled.div`
  display: flex;

  p {
    font-size: 12px;
    font-weight: 600;
  }
`

export const ExperienceCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  p {
    color: grey;
    font-weight: 700;
  }
`
