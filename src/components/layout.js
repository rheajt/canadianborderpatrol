import React from 'react';
import { Link } from 'gatsby';

import Bio from './bio';
import { GlobalStyle } from '../theme/globalStyle'

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `24rem`,
          padding: `1.5rem 0.75rem`,
        }}
      >
        <GlobalStyle />
        <main>{children}</main>
        <Bio />
        <footer>© {new Date().getFullYear()} Canadian Border Patrol</footer>
      </div>
    );
  }
}

export default Layout;
