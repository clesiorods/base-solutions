import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
    font-family: 'Montserrat', Helvetica sans-serif;
    font-size: 0.9rem;
    transition: .3s all;
    overflow: hidden;
  }
`;
 
export default GlobalStyle;