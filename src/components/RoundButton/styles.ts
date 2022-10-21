import styled from 'styled-components'

export const RoundButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.secondary.color};
  border: none;
  color: white;
  cursor: pointer;
  :hover {
    transition: 0.5s;
    height: 44px;
    width: 44px;
  }
`
