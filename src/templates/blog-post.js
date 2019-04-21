import React from 'react';
import { Link, graphql } from 'gatsby';
import { Flex, Box, Heading, Text } from 'rebass';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Divider from '../components/divider';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    const [__, id] = post.frontmatter.url.split('id=');

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Flex flexWrap='noflex' flexDirection='column'>
          <Heading fontSize={[2,3,4]}>{siteTitle} Investigates...</Heading>
          <Flex flexWrap='flex' flexDirection='row' alignItems='baseline'>
            <Heading fontSize={[3,4,5]}>
              {post.frontmatter.title}
            </Heading>
            <Text fontSize={[0, 1, 2]} ml={2} css={{fontStyle: 'italic'}}>
              {post.frontmatter.date}
            </Text>
          </Flex>
          <Box>
            {/* <iframe frameBorder="0" width="400" src={post.frontmatter.url} /> */}
          </Box>
          <Box mt={3} alignSelf='center'>
            <audio controls>
              <source
                src={`https://docs.google.com/uc?export=download&id=${id}`}
                type="audio/mp3"
              />
            </audio>
          </Box>
          <Box mx={2}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Box>
          <Divider width={1/4} />
          <Flex
            flexWrap='flex'
            justifyContent='space-between'
            flexDirection='row'
          >
            <Box>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </Box>
            <Box>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </Box>
          </Flex>
        </Flex>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        url
      }
    }
  }
`;

// <header>
//   <h3
//     style={{
//       fontFamily: `Montserrat, sans-serif`,
//       marginTop: 0,
//     }}
//   >
//     <Link
//       style={{
//         boxShadow: `none`,
//         textDecoration: `none`,
//         color: `inherit`,
//       }}
//       to={`/`}
//     >
//       {siteTitle} investigates...
//     </Link>
//   </h3>
// </header>
// <h1>{post.frontmatter.title}</h1>
// <p
//   style={{
//     ...scale(-1 / 5),
//     display: `block`,
//     marginBottom: rhythm(1),
//     marginTop: rhythm(-1),
//   }}
// >
//   {post.frontmatter.date}
// </p>
// {/* <iframe frameBorder="0" width="400" src={post.frontmatter.url} /> */}
//
// <audio controls>
//   <source
//     src={`https://docs.google.com/uc?export=download&id=${id}`}
//     type="audio/mp3"
//   />
// </audio>
// <div dangerouslySetInnerHTML={{ __html: post.html }} />
// <hr
//   style={{
//     marginBottom: rhythm(1),
//   }}
// />
//
// <ul
//   style={{
//     display: `flex`,
//     flexWrap: `wrap`,
//     justifyContent: `space-between`,
//     listStyle: `none`,
//     padding: 0,
//   }}
// >
//   <li>
//     {previous && (
//       <Link to={previous.fields.slug} rel="prev">
//         ← {previous.frontmatter.title}
//       </Link>
//     )}
//   </li>
//   <li>
//     {next && (
//       <Link to={next.fields.slug} rel="next">
//         {next.frontmatter.title} →
//       </Link>
//     )}
//   </li>
// </ul>

// authors {
//   name
//   description
//   social {
//     twitter
//   }
// }
