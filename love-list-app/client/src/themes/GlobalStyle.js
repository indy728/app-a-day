import { createGlobalStyle } from 'styled-components';
import { device } from './media';

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    -moz-box-sizing: inherit; 
    -webkit-box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 50%;

    @media ${device.md} {
      font-size: 62.5%; 
    }

    @media ${device.xl} {
      font-size: 75%; 
    }
  }

  body {
    background-image: ${({palette}) => `linear-gradient(165deg, ${palette.primary}, ${palette.white})`};
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    font-size: 1.8rem;

    address, h1, h2, h3, h4, h5, h6 {
    }
    
    * {
      display: flex;
      flex-flow: column;
      align-items: center;
      text-align: center;
    }
    
    h1 {
    }

    h2 {
    }

    @media ${device.md} {
      font-size: 1.4rem;
    }
  }
`;

export default GlobalStyle;