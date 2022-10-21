import styled from 'styled-components'

export const ProjectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #000;
  width: 100%;
  padding-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      font-size: 24px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0px;
  }

  li {
    font-size: 14px;
    color: grey;
    font-weight: 600;
    list-style: none;
    margin: 0px 2px;
    :not(:last-child):after {
      content: ' -';
    }
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 1044px) {
    div {
      display: block;
    }
    h4 {
      font-size: 20px !important;
    }
  }

  @media screen and (max-width: 720px) {
    div {
      display: flex;
    }
  }
`
