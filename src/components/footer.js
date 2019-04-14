import React from 'react';
import { Box } from 'rebass'
import styled from 'styled-components'

import Bio from './bio'

class Footer extends React.Component {
  const FootText = styled.footer`
    text-align: center;
  `;
  render() {
    return(
      <Bio />
      <Box>
        <FootText>© {new Date().getFullYear()} Canadian Border Patrol</FootText>
      </Box>
    );
  }
}
