import styled from 'styled-components'

export const ButtonContainerPrimary = styled.button`
  border-radius: 10px;
  max-width: 220px;
  padding: 14px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.button.link};
  background-color: #0a192f;
  border: 1px solid;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  :hover {
    outline: none;
    box-shadow: 4px 4px 0 0 ${(props) => props.theme.button.link};
    transform: translate(-5px, -5px);
  }
`
export const ButtonContainerSecondary = styled.button`
  border-radius: 10px;
  max-width: 220px;

  padding: 14px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.button.link};
  background-color: #0a192f;

  border: 1px solid;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  :hover {
    outline: none;
    box-shadow: 4px 4px 0 0 ${(props) => props.theme.button.link};
    transform: translate(-5px, -5px);
  }
`
