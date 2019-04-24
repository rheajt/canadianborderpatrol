import React from 'react';
import Media from 'react-media';

import Container from './container';
import { GlobalStyle } from '../theme/globalStyle';
import Header from './header';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    );
  }
}

export default Layout;

// TODO: Add ThemeProvider

// <div
//   style={{
//     marginLeft: `auto`,
//     marginRight: `auto`,
//     maxWidth: `24rem`,
//     padding: `1.5rem 0.75rem`,
//   }}
// >
