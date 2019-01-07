import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import config from '../../data/SiteConfig';

const theme = {
  primary: '',
  secondary: '',
  black: '#1f1f1f'
};

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    margin: 0;
    padding: 20px;
}
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <GlobalStyle />
          <Header />
          {children}
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
