import React from 'react';
import { Flex, Image, Heading } from "rebass";

import cbpSeal from '../assets/canadian-border-patrol-logo.png';

class Title extends React.Component {
  render() {
    return(
      <Flex
        flexWrap='nowrap'
        flexDirection='row'
        justifyContent='flex-start'
      >
        <Image width={1/12} src={cbpSeal} alt="canadian border patrol seal" />
        <Heading textAlign="left">The Canadian Border Patrol</Heading>
      </Flex>
    )
  }
}
