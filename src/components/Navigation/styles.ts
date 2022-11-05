import styled from 'styled-components'

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  top: 0;
  position: fixed;
  z-index: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-size: 14.5px;
    font-weight: 600;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.primary.color};
    }
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`
