import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from 'rebass';
import BioItem from './bioitem';

const Bio = () => {
  const { site } = useStaticQuery(bioQuery);
  const { authors } = site.siteMetadata;
  const bioWidth = 1 / authors.length;
  return (
    <Flex flexWrap="nowrap" flexDirection="row">
      {authors.map((author, ind) => (
        <Box
          flex="1 1 auto"
          mx={2}
          width={bioWidth}
          key={`author-${ind}`}
        >
          <BioItem
            key={`${author.name}-${ind}`}
            bioImage={`/${author.avatar}`}
            bioName={author.name}
            bioDescription={author.description}
            bioTwitter={author.social.twitter}
            alignImage={ind % 2 !== 0 ? 'left' : 'right'}
          />
        </Box>
      ))}
    </Flex>
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
