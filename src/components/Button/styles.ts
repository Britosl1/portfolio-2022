import styled from 'styled-components'

export const ButtonContainerPrimary = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary.color};
  width: 160px;
  padding: 14px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.primary.text};
  border: none;
  :hover {
    opacity: 2;
    background: red;
  }
`
export const ButtonContainerSecondary = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondary.color};
  width: 160px;
  padding: 14px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.secondary.text};
  border: none;
  :hover {
    opacity: 0.8;
    color: ${(props) => props.theme.primary.text};
    cursor: pointer;
  }
`
