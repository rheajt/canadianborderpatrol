/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { authors } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '1rem',
            }}
          >
            {authors.map((author, ind) => (
              <div
                key={`${author.name}-${ind}`}
                style={{
                  marginBottom: rhythm(2.5),
                }}
              >
                <img
                  src={`/${author.avatar}`}
                  alt={author.name}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    maxWidth: '100px',
                    height: 'auto',
                    alignSelf: 'start',
                    borderRadius: '100%',
                    display: 'block',
                    order: ind % 2 !== 0 ? 1 : 0,
                  }}
                />
                <p>
                  {author.description}
                  {` `}
                  <a href={`https://twitter.com/${author.social.twitter}`}>
                    You should follow him on Twitter
                  </a>
                </p>
              </div>
            ))}
          </div>
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
