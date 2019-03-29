module.exports = {
  siteTitle: 'ioFog', // Site title.
  siteTitleShort: 'ioFog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'ioFog', // Alternative site title for SEO.
  siteUrl: 'https://iofog.org', // Domain of your website without pathPrefix.
  pathPrefix: '/iofog.org', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'Eclipse ioFog, a distributed Edge Compute Network (ECN) platform for IoT micoservices and more!', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-126987794-2', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: {
    github: 'https://github.com/eclipse-iofog',
    twitter: 'https://twitter.com/EdgeworxIO',
    slack:
      'https://join.slack.com/t/iofog/shared_invite/enQtNTQxMDczNjE0Mjc5LWViMThlYTkxYzBhYzYzN2IxZDZjMGYyYjA0OTM2NDZlZTI0ZTUwOTdlYzllYWRlNDgwY2ExZjY3YWVhODM0MzU'
  },
  copyright: '© 2018 Eclipse Foundation, Inc.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#4668fd', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff' // Used for setting manifest background color.
};
