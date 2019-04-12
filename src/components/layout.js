import React from 'react';
import Media from 'react-media';

import { rhythm, scale } from '../utils/typography';
import mountains from '../assets/mountains.svg';
import canadian from '../assets/cbp-canadian.svg';
import american from '../assets/cbp-american.svg';

import Bio from './bio';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          position: 'relative',
        }}
      >
        <img
          src={mountains}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            zIndex: -99,
            filter: 'grayscale(90%) opacity(.9)',
            margin: 0,
          }}
        />
        <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
              <img
                src={canadian}
                style={{ position: 'fixed', top: '25%', width: '30%' }}
              />
            ) : (
              <img src={canadian} style={{ position: 'fixed', top: '50%' }} />
            )
          }
        </Media>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            margin: '0 auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '#8282827d 0px 0px 20px 20px',
          }}
        >
          <main>{children}</main>
          <Bio />
          <footer>© {new Date().getFullYear()} Canadian Border Patrol</footer>
        </div>
        <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
              <img
                src={american}
                style={{
                  position: 'fixed',
                  right: 0,
                  top: '25%',
                  width: '30%',
                }}
              />
            ) : (
              <img
                src={american}
                style={{ position: 'fixed', right: 0, top: '50%' }}
              />
            )
          }
        </Media>
      </div>
    );
  }
}

export default Layout;
