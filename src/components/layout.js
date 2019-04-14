import React from 'react';
import { Link } from 'gatsby';

import Container from './container'
import { GlobalStyle } from '../theme/globalStyle'
import Header from './header'
import Bio from './bio';


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

// <div
//   style={{
//     marginLeft: `auto`,
//     marginRight: `auto`,
//     maxWidth: `24rem`,
//     padding: `1.5rem 0.75rem`,
//   }}
// >

// <footer>© {new Date().getFullYear()} Canadian Border Patrol</footer>
