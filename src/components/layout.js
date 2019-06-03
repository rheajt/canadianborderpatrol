import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Container from './container';
import theme, { GlobalStyle } from '../theme';
import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header />
        <Content>
          <main>{children}</main>
          <Footer />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default Layout;

const Content = styled.div`
  background-color: white;
  padding: 3rem 3rem;
  border-radius: 15px;
`;
