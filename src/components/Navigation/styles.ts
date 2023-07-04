import styled from 'styled-components'

type NavTypes = {
  scrolled: boolean
}

export const NavigationContainer = styled.nav<NavTypes>`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: ${(props) => (props.scrolled ? '#ccd6f6' : 'transparent')};
  transition: ease-out 0.2s;

  ul {
    display: flex;
    list-style: none;
    background-color: transparent;
  }
  li {
    margin: 20px;
    background-color: transparent;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-size: 14.5px;
    font-weight: 600;
    color: ${(props) => (props.scrolled ? '#0a192f' : '#ccd6f6')};
    background: none;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.button.link};
    }
  }
  @media screen and (max-width: 769px) {
    display: none;
  }
`
