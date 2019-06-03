import React from 'react';
import { Link, graphql } from 'gatsby';
import { Icon } from '@iconify/react';
import arrowRight from "@iconify/react/fa-solid/arrow-right";
import { Flex, Text, Box } from 'rebass';

import Layout from '../components/layout';
import SEO from '../components/seo';
import EpisodeList from '../components/episodelist';
import Divider from '../components/divider';
import SimpleGatsbyLink from '../components/simplegatsbylink';

const SiteIndex = props => {
  const { data } = props;
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
    <Layout>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <EpisodeList posts={thePosts} />
      <SimpleGatsbyLink
        textAlign="center"
        fontSize={[2, 3, 4]}
        fontWeight="bold"
        to="/episodes/"
      >
        All Episodes <Icon icon={arrowRight} />
      </SimpleGatsbyLink>
      <Divider width={1 / 2} />
    </Layout>
  );
};

export default SiteIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
