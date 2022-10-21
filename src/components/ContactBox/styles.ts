import styled from 'styled-components'

export const ContactBoxContainer = styled.div`
  display: flex;
  border-top: 2px solid #000;
  width: 100%;
  padding: 16px 0px;
  align-items: center;
`

export const ContactBoxInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  p {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
    color: grey;
  }

  h4 {
    font-weight: 600;
  }

  @media screen and (max-width: 720px) {
    p {
      font-size: 10px;
    }

    h4 {
      font-size: 14px;
      line-break: anywhere;
    }
  }
`
