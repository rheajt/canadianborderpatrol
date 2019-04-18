import React from 'react';
import { Link, graphql } from 'gatsby';
import { IoMdArrowForward } from 'react-icons/io';
import { Text, Box } from 'rebass';

import Layout from '../components/layout';
import SEO from '../components/seo';
import EpisodeList from '../components/episodelist';

class BlogIndex extends React.Component {
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
        <Text textAlign='right'>
          <Link to="/episodes/">All Posts <IoMdArrowForward /></Link>
        </Text>
        <Box width={1/6}><hr /></Box>
      </Layout>
    );
  }
}

export default BlogIndex;

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
