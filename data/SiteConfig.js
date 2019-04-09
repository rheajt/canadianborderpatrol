module.exports = {
  siteTitle: 'Canadian Border Patrol', // Site title.
  siteTitleShort: 'CBP', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'The realest, fake agency in North America', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://canadianborderpatrol.com', // Domain of your website without pathPrefix.
  pathPrefix: '/canadianborderpatrol',
  siteDescription:
    'Investigating the important differences between the great border between two great countries', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  googleAnalyticsID: '', // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: 'Discussion', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Border Patrol Agent', // Username to display in the author segment.
  // userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'North America', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: 'Sharing is caring.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/rheajt',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/rheajt',
      iconClassName: 'fa fa-twitter'
    }
  ],
  copyright: 'Copyright © 2019. Canadian Border Patrol', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#f00', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};
