import React from 'react';
import { Flex, Box } from 'rebass';

import Title from './title';
import LinkBar from './linkbar';


const Header = () => {
  return(
    <Flex
      width={1}
      flexWrap='noflex'
      flexDirection='column'
      alignItems='center'>
      <Title />
      <LinkBar />
    </Flex>
  )
}

export default Header;
