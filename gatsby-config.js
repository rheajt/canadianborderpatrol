module.exports = {
  siteMetadata: {
    title: `Canadian Border Patrol`,
    description: 'The realest, fake border agency in North America',
    siteUrl: 'https://canadianborderpatrol.com',
    authors: [
      {
        name: `Jordan Rhea`,
        avatar: 'cbp-american.svg',
        description: `Web developer and amateur juggler`,
        social: {
          website: `https://jordanrhea.com`,
          twitter: `rheajt`,
        },
      },
      {
        name: `Ryan Oldford`,
        avatar: 'cbp-canadian.svg',
        description: `Teacher and warden of the North`,
        social: {
          website: `https://github.com/roldford`,
          twitter: `roldford`,
        },
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `{
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        setup: ({
          query: {
            site: { siteMetadata },
            ...rest
          },
        }) => {
          return {
            ...siteMetadata,
            ...rest,
            custom_namespaces: {
              "itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd"
            },
            custom_elements: [
              { "atom:link": {
                _attr: {
                  href: siteMetadata.siteUrl + "/rss.xml",
                  rel: "self",
                  type: "application/rss+xml",
                }
              }},
              { "itunes:subtitle": siteMetadata.description },
              { "itunes:summary": "Ryan is Canadian. Jordan is American. Together, they explore strange and interesting bits of Canadian culture." },
              { "image": [
                { "url": "https://s3-us-west-2.amazonaws.com/canadianborderpatrol.com/data/cpb_logo_1400.png" },
                { "title": siteMetadata.title },
                { "link": siteMetadata.siteUrl },
              ]},
              { "itunes:image": {
                _attr: {
                  href: "https://s3-us-west-2.amazonaws.com/canadianborderpatrol.com/data/cpb_logo_1400.png"
                }
              }},
              { "itunes:author": "Jordan Rhea; Ryan Oldford" },
              { "itunes:category": {
                _attr: {
                  text: "Society & Culture"
                }
              }},
              { "itunes:explicit": "yes" },
              { "language": "en-us" },
              { "copyright": "© 2019 Canadian Border Patrol" },
              { "itunes:owner": [
                  { "itunes:name": "Ryan Oldford" },
                  { "itunes:email": "ryan.oldford@gmail.com" }
                ]
              },
            ]
          }
        },
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  enclosure: {
                    'url': edge.node.frontmatter.url,
                    'type': 'audio/mpeg',
                  },
                  custom_elements: [
                    { 'content:encoded': "<![CDATA["+edge.node.html+"]]>" },
                    { 'itunes:duration': edge.node.frontmatter.episodeDuration },
                    { 'itunes:subtitle': edge.node.excerpt },
                  ],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                      url
                      episodeDuration
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Canadian Border Patrol',
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};

// { "itunes:category": [
//   { _attr: { text: "Society & Culture" }},
//   { "itunes:category": {
//     _attr: { text: "Personal Journals" }
//   }}
// ]},
