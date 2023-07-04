import styled from 'styled-components'

export const ExperienceBoxContainer = styled.div`
  border-top: 2px solid #000;
  width: 100%;
  padding: 16px 0px;
`

export const ExperienceInfoContainer = styled.div`
  p {
    font-size: 12px;
    font-weight: 600;
  }
  span {
    color: ${({ theme }) => theme.button.link};
    font-weight: 700;
  }

  @media screen and (max-width: 340px) {
    flex-direction: column;
  }
`

export const ExperienceCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  .company-container {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 10px;
  }

  li {
    color: ${({ theme }) => theme.primary.text};
    margin: 5px 0px;
  }

  li::before {
    content: '»';
    color: ${({ theme }) => theme.button.link};
    font-weight: bold;
    display: inline-block;
    font-size: 16px;
    margin-right: 5px;
  }
  @media screen and (max-width: 340px) {
    margin-left: 0px;
    margin-top: 10px;
  }

  p {
    color: ${({ theme }) => theme.primary.text};
    font-weight: 700;
  }
`
