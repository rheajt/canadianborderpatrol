/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
import { Flex, Box } from 'rebass';

import BioItem from './bioitem';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { authors } = data.site.siteMetadata;
        const bioWidth = (1/authors.length);
        return (
          <Flex flexWrap='nowrap' flexDirection='row'>
            {authors.map((author, ind) => (
              <Box flex='1 1 auto' mx={2} width={bioWidth}>
                <BioItem
                  key={`${author.name}-${ind}`}
                  bioImage = {`/${author.avatar}`}
                  bioName = {author.name}
                  bioDescription = {author.description}
                  bioTwitter = {author.social.twitter}
                  alignImage = {ind % 2 !== 0 ? 'left' : 'right'}
                />
              </Box>
            ))}
          </Flex>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        authors {
          name
          description
          avatar
          social {
            twitter
          }
        }
      }
    }
  }
`;

export default Bio;


// <div
//   key={`${author.name}-${ind}`}
//   style={{
//     display: `flex`,
//     marginBottom: `2.5rem`,
//   }}
// >
//   <img
//     src={`/${author.avatar}`}
//     alt={author.name}
//     style={{
//       marginRight: `0.5rem`,
//       marginBottom: 0,
//       maxWidth: '100px',
//       height: 'auto',
//       alignSelf: 'start',
//       borderRadius: '100%',
//       order: ind % 2 !== 0 ? 1 : 0,
//     }}
//   />
//   <p>
//     {author.description}
//     {` `}
//     <a href={`https://twitter.com/${author.social.twitter}`}>
//       You should follow him on Twitter
//     </a>
//   </p>
// </div>

// <div
//   style={{
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gridGap: '1rem',
//   }}
// >
