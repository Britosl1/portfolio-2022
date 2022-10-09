import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 20rem;
  padding: 30px 60px;
  background-color: ${(props) => props.theme.primary.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    height: 100%;
  }
`

export const TopFooterContainer = styled.div`
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LeftFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px 10px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1 {
      text-align: center;
      font-size: 28px !important;
    }
    p {
      font-size: 16px !important;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 10px;
  }
`

export const RightFooterContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.primary.color};
  padding: 10px 10px;
  @media screen and (max-width: 720px) {
    width: 100%;
    button {
      align-self: center;
      width: 100%;
    }
  }

  label {
    font-size: 14px;
  }
  input {
    height: 20px;
  }
  input,
  textarea {
    border-radius: 4px;
    padding: 4px 6px;
    margin-bottom: 8px;
    border: none;
  }
`

export const BottomFooterContainer = styled.div`
  border-top: 2px solid black;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  margin-bottom: 0px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    @media screen and (max-width: 720px) {
      margin-bottom: 8px;
    }
  }
`
