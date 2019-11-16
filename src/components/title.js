import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Flex, Box, Heading } from 'rebass';
import Img from 'gatsby-image';

const Title = () => {
  const { site, logo } = useStaticQuery(titleQuery);
  const siteTitle = site.siteMetadata.title;
  const siteDescription = site.siteMetadata.description;

  return (
    <Flex
      width={600}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width={[0.5, null, 300]} flex="0 1 auto">
        <Link to="/">
          <Img fluid={logo.childImageSharp.fluid} alt={siteTitle} />
        </Link>
      </Box>
      <Heading fontSize={[3]} color="flagred" css={{ textAlign: 'center' }}>
        {siteDescription}
      </Heading>
    </Flex>
  );
};

const titleQuery = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    logo: file(relativePath: { eq: "cbp-logo-400.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Title;
