import React from 'react';
import { Flex, Box } from 'rebass';

import Title from './title';
import LinkBar from './linkbar';


class Header extends React.Component {
  render() {
    return(
      <Flex justifyContent='space-between'>
        <Box flex='1 1 auto'>
          <Title title={this.props.title}/>
        </Box>
        <Box flex='1 1 auto'>
          <LinkBar />
        </Box>
      </Flex>
    )
  }
}
