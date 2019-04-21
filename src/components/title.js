import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Flex, Box, Heading } from "rebass";
import styled from 'styled-components';

import cbpSeal from '../assets/canadian-border-patrol-logo.png';

class Title extends React.Component {
  render() {
    const Logo = styled.img`
      max-width: 100%;
      height: auto;
    `
    return(
      <StaticQuery
        query={titleQuery}
        render={data => {
          const siteTitle = data.site.siteMetadata.title;
          return(
            <Flex
              flexWrap='nowrap'
              flexDirection='row'
              justifyContent='flex-start'
              alignItems='center'
            >
              <Box width={[1/8, 1/10]} mr={2}>
                <Logo
                  src={cbpSeal}
                  alt={`${siteTitle} Seal`}
                />
              </Box>
              <Heading textAlign="left" fontSize={[4,5,6]}>{siteTitle}</Heading>
            </Flex>
          )
        }}
      />
    )
  }
}

const titleQuery = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Title;
