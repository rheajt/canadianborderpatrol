import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

import Bio from './bio';

class Footer extends React.Component {
  render() {
    const FootText = styled.footer`
      text-align: center;
    `;
    return(
      <>
        <Bio />
        <Box>
          <FootText>© {new Date().getFullYear()} Canadian Border Patrol</FootText>
        </Box>
      </>
    );
  }
}

export default Footer;
