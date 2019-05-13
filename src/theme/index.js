import { createGlobalStyle } from 'styled-components';

const theme = {
  breakpoints: ['26em', '40em', '54em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    serif: 'Libre Baskerville, Times New Roman, serif',
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');
  body {
    padding: 0;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    padding: 0 auto;
  }
  ul p {
    margin: 0 auto;
  }
`;

export default theme;
export { GlobalStyle };
