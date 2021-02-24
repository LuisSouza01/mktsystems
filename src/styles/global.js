import { createGlobalStyle } from 'styled-components';

import BackgroundImg from '../assets/images/background.png'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;

    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }

  body {    
    background: url(${BackgroundImg}) no-repeat center;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: center;
  }

  #root {
    min-width: 100%;
    background-color: rgba(70, 33, 173, 0.8);
    height: 100vh;
    overflow: auto;
  }

  button {
    cursor: pointer;
  }
`;