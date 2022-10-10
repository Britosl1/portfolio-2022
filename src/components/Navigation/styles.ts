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
  background-color: #f9f9f9;
  z-index: 1;

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
    &:hover {
      color: ${({ theme }) => theme.primary.color};
    }
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`
