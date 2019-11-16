import React from 'react';
import { Link, graphql } from 'gatsby';
import { Flex, Text, Box } from 'rebass';

import Layout from '../components/layout';
import SEO from '../components/seo';
import EpisodeList from '../components/episodelist';
import Divider from '../components/divider';

function AllEpisodesIndex({ data, location }) {
  const thePosts = data.allMarkdownRemark.edges.map(post => {
    return {
      number: post.node.frontmatter.number,
      title: post.node.frontmatter.title,
      slug: post.node.fields.slug,
      date: post.node.frontmatter.date,
      excerpt: post.node.excerpt,
    };
  });

  return (
    <Layout location={location}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <EpisodeList posts={thePosts} />
    </Layout>
  );
}

export default AllEpisodesIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            number
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
