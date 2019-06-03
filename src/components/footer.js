import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

import Bio from './bio';

const Footer = () => {
  return(
    <>
      <Bio />
      <Box fontSize={0}>
        <FootText>© {new Date().getFullYear()} Canadian Border Patrol</FootText>
      </Box>
    </>
  );
}

export default Footer;

const FootText = styled.footer`
  text-align: center;
`;
