import styled from 'styled-components'

export const PersonalProjectsBoxContainer = styled.a`
  display: flex;
  border-top: 2px solid ${(props) => props.theme.button.link};
  width: 100%;
  padding-top: 20px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.5s;
  margin-bottom: 20px;

  img {
    max-width: 520px;
    transition: ease-in-out 0.5s;
  }

  .info-container {
    background-color: rgba(2, 12, 27, 0.7);
    position: relative;
    border-radius: 6px;
    padding: 14px 20px;
    margin-left: -10px;
    height: 80%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    max-width: 300px;
    transition: ease-in-out 0.5s;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      h4 {
        font-size: 24px;
        color: ${(props) => props.theme.primary.text};
      }
    }

    ul {
      /* display: flex; */
      flex-wrap: wrap;
      margin-top: 10px;
      padding: 0;
    }

    li {
      font-size: 14px;
      color: ${({ theme }) => theme.button.link};
      font-weight: 600;
      list-style: none;
      margin: 0px 2px;
    }

    @media screen and (max-width: 769px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &:hover img {
    outline: none;
    box-shadow: yellow -5px 5px, yellow -10px 10px, yellow -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px;
    transform: translate(-5px, -5px);
  }

  &:hover .info-container {
    outline: none;
    box-shadow: 4px 4px 4px 4px ${(props) => props.theme.button.link};
    box-shadow: ${(props) => props.theme.button.link} 5px 5px,
      ${(props) => props.theme.button.link} 10px 10px,
      ${(props) => props.theme.button.link}15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px,
      ${(props) => props.theme.button.link} 25px 25px;
    transform: translate(5px, -5px);
  }
  @media screen and (max-width: 1044px) {
    div {
      display: block;
    }
    h4 {
      font-size: 20px !important;
    }
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    /* height: auto; */
    img {
      width: 100%;
    }
    div {
      display: flex;
    }
  }
`
