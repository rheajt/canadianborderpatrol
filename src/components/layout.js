import React from 'react';
import { useStaticQuery } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Container from './container';
import theme, { GlobalStyle } from '../theme';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const {
    allUnsplashPhoto: { edges: photos },
  } = useStaticQuery(containerQuery);

  const { node: backgroundImage } = photos[0];

  console.log(backgroundImage);

  return (
    <ThemeProvider theme={theme}>
      <Container backgroundImage={backgroundImage}>
        <GlobalStyle />
        <Content>
          <Header />
          <main>{children}</main>
          <Footer unsplashUser={backgroundImage.user} />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Content = styled.div`
  background-image: linear-gradient(
    90deg,
    transparent 0%,
    #ffffff85 25%,
    #ffffff85 75%,
    transparent 100%
  );
  max-width: 768px;
  overflow: hidden;
  padding: 3rem 3rem;
  margin: 0 auto;
  border-radius: 15px;
`;

const containerQuery = graphql`
  query MyQuery {
    allUnsplashPhoto {
      edges {
        node {
          description
          urls {
            full
            regular
            small
          }
          user {
            name
            links {
              html
            }
          }
        }
      }
    }
  }
`;
