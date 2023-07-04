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
       background-color: #0a192f;
   }
   #root{
       margin:0 auto;
   }

   body {
    padding: 0px 100px;
   }

   h1 {
    color: ${(props) => props.theme.primary.text};
   }
   h2, h3, h4, p {
    color: ${(props) => props.theme.secondary.text};
   }
`
export default GlobalStyles
