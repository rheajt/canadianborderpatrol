import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

import Bio from './bio';

const Footer = ({ unsplashUser: user }) => {
  return (
    <>
      <Bio />
      <Box fontSize={0}>
        <FootText>
          <p>© {new Date().getFullYear()} Canadian Border Patrol</p>
          <p>
            Background image by <a href={user.links.html}>{user.name}</a> /{' '}
            <a href="https://unsplash.com">Unsplash</a>
          </p>
        </FootText>
      </Box>
    </>
  );
};

export default Footer;

const FootText = styled.footer`
  text-align: center;
`;
