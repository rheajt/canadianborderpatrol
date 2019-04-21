import React from 'react';
import { Link, graphql } from 'gatsby';
import { IoMdArrowForward } from 'react-icons/io';
import { Flex, Text, Box } from 'rebass';

import Layout from '../components/layout';
import SEO from '../components/seo';
import EpisodeList from '../components/episodelist';
import Divider from '../components/divider';

class SiteIndex extends React.Component {
  render() {
    const { data } = this.props;
    const thePosts = data.allMarkdownRemark.edges.map((post) => {
      return (
        {
          title: post.node.frontmatter.title,
          slug: post.node.fields.slug,
          date: post.node.frontmatter.date,
          excerpt: post.node.excerpt
        }
      )
    });

    return (
      <Layout location={this.props.location}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
        <EpisodeList posts={thePosts} />
        <Text
          textAlign='center'
          fontSize={[2, 3, 4]}
          fontWeight='bold'
        >
          <Link
            to="/episodes/"
            css={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            All Episodes <IoMdArrowForward />
          </Link>
        </Text>
        <Divider width={1/2} />
      </Layout>
    );
  }
}

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
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

// TODO: remove this.props.location from Layout
// TODO: Replace css prop on link with site theme

// site {
//   siteMetadata {
//     title
//   }
// }

// <div
//   className="blog-index"
// >
//   <img src={cbpSeal} alt="canadian border patrol seal" />
//   <div>
//     {/* <Bio /> */}
//     {posts.map(({ node }) => {
//       const title = node.frontmatter.title || node.fields.slug;
//       return (
//         <div key={node.fields.slug}>
//           <h3
//             style={{
//               marginBottom: `0.25rem`,
//             }}
//           >
//             <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//               {title}
//             </Link>
//           </h3>
//           <small>{node.frontmatter.date}</small>
//           <p
//             dangerouslySetInnerHTML={{
//               __html: node.frontmatter.description || node.excerpt,
//             }}
//           />
//         </div>
//       );
//     })}
//   </div>
// </div>
// <hr
//   style={{
//     marginBottom: `1rem`,
//   }}
// />
