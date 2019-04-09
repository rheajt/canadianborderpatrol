import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Bio from './bio';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
        <Bio />
        <footer>© {new Date().getFullYear()} Canadian Border Patrol</footer>
      </div>
    );
  }
}

export default Layout;
