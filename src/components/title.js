import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Flex, Box, Heading } from "rebass";
import styled from 'styled-components';

// Logo styling trick allows automatic resizing,
// but if container is larger than image size, the image won't center
// Responsive widths are chosen to center the logo and keep it responsive

class Title extends React.Component {
  render() {
    const Logo = styled.img`
      max-width: 100%;
      height: auto;
    `
    const cbpSeal = '/cbp-logo-400.png'
    return(
      <StaticQuery
        query={titleQuery}
        render={data => {
          const siteTitle = data.site.siteMetadata.title;
          return(
            <Flex width={1} justifyContent="center">
              <Box
                width={[.5, null, 300]}
                flex="0 1 auto"
              >
                <Link to='/'>
                  <Logo
                    src={cbpSeal}
                    alt={`${siteTitle} Seal`}
                  />
                </Link>
              </Box>
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
