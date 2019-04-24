import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './container';
import theme, { GlobalStyle } from '../theme';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  </ThemeProvider>
);

export default Layout;
