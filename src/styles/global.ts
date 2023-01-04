import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  body {
    background-image: url('/public/assets/images/bg.jpg');
    font-family: "Roboto";
    font-weight: 300;
    font-size: 16px;
    color: #555;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;

    @media(max-width: 520px) {
      background-color: #2c3e50;
    }
  }

  /* Titles */
  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto";
    font-weight: 300;
    color: #333;
  }

  h4 {
    color: white;
    font-weight: 400;
  }

  h1, h2, h3 {
    font-family: 'Roboto',sans-serif;
    margin-top: 30px;
    font-weight: 100;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  h1{
    font-size: 60px;
    color: white;
    font-weight: 400;
    @media(max-width: 740px) {
      font-size: 36px;
    }
  }
  
  a:hover, a:focus {
    -webkit-transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
`;