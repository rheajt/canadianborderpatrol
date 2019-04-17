import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import EpisodeList from '../components/episodelist';

class BlogIndex extends React.Component {
  render() {
    // const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
        <EpisodeList posts={posts} moreButton />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
