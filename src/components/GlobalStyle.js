import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
  :root {
    --dark: #01060E;
    --light: #F2F4F7;
    --accent: #E6B450;
    --secondary: #3D424D;
    --font-family: Montserrat, sans-serif;
    --gradient-base: rgb(116,221,103);
    --gradient:linear-gradient(145deg, rgba(116,221,103,1) 0%, rgba(235,231,56,1) 19%, rgba(233,213,0,1) 52%, rgba(0,212,255,1) 93%);
    --font-size-standard: calc(1.15rem + 0.25vw);
    --font-size-small: calc(0.85rem + 0.25vw);
    --shadow:
      1px 4px 11px rgba(0, 0, 0, 0.11),
      -1px 4px 3px rgba(0, 0, 0, 0.11);
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--light);
    color: var(--dark);
    font-family: var(--font-family);
    font-size: var(--font-size-standard);
    margin: 0 auto;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
