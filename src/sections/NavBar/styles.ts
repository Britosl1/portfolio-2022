import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  top: 0;
  position: fixed;
  background-color: ${(props) => props.theme.secondary.text};
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
  }
`
