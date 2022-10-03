import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Roboto', sans-serif;
       scroll-behavior: smooth;
   }
   #root{
       margin:0 auto;
   }
`
export default GlobalStyles
