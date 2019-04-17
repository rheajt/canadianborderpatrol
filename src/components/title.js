import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
        <Image width={1/12} src={cbpSeal} alt={`${this.props.title} Seal`} />
        <Heading textAlign="left">{this.props.title}</Heading>
      </Flex>
    )
  }
}

// const titleQuery = graphql`
//   query TitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default Title;
