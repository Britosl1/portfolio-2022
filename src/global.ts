import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export type MyProps = {
  theme: typeof theme
}

const GlobalStyles = createGlobalStyle<MyProps>`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   *{
       margin: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Roboto', sans-serif;
       scroll-behavior: smooth;
   }
   #root{
       margin:0 auto;
   }

   body {
    padding: 0px 100px;
    background-color: #0a192f;

   }

   h1 {
    color: ${(props) => props.theme.primary.text};
    font-size: 64px;
   }
   h2, h3, h4, p {
    color: ${(props) => props.theme.secondary.text};
   }

   p {
    font-size: 20px;
   }

   @media screen and (max-width: 769px) {
    body {
      padding: 0px 20px;
    }
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
     }
   }
`
export default GlobalStyles
