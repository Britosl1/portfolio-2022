import styled from 'styled-components'

export const BlurContainer = styled.div`
  position: fixed;
  top: 0 !important;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;
`

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  #close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 720px) {
    width: 90%;
    button {
      align-self: center;
      width: 100%;
    }
  }

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 2px;
  }

  input,
  textarea {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 2px;
    padding: 8px 6px;
    margin-bottom: 8px;
    border: none;
  }
  p {
    font-size: 10px;
    color: red;
    margin-bottom: 4px;
  }
`
