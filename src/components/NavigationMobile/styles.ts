import styled from 'styled-components'

export const TopNavigationMobileContainer = styled.div`
  .icon {
    display: none;
    @media screen and (max-width: 720px) {
      display: block;
    }
  }
`

export const NavigationMobileContainer = styled.nav`
  display: none;
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${({ theme }) => theme.primary.color};
    top: 0;
    height: 100%;
    min-width: 50%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    ul {
      list-style: none;
    }
    li {
      margin: 20px;
    }
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      &:hover {
        color: ${({ theme }) => theme.primary.text};
      }
    }

    .first-child-li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
