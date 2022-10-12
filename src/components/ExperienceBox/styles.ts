import styled from 'styled-components'

export const ExperienceBoxContainer = styled.div`
  border-top: 2px solid #000;
  width: 100%;
  padding: 16px 0px;
`

export const ExperienceInfoContainer = styled.div`
  display: flex;
  p {
    font-size: 12px;
    font-weight: 600;
  }
  .date-container {
    min-width: 130px;
  }
  @media screen and (max-width: 340px) {
    flex-direction: column;
  }
`

export const ExperienceCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  @media screen and (max-width: 340px) {
    margin-left: 0px;
    margin-top: 10px;
  }

  p {
    color: grey;
    font-weight: 700;
  }
`
