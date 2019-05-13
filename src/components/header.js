import React from 'react';
import { Flex, Box } from 'rebass';

import Title from './title';
import LinkBar from './linkbar';


class Header extends React.Component {
  render() {
    return(
    <Flex
      width={1}
      flexWrap='noflex'
      flexDirection='column'
      alignItems='center'
    >
      <Title />
      <LinkBar />
    </Flex>
    )
  }
}

export default Header;
