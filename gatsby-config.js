module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: `Vince`,
    author: {
      name: `Vince`,
      summary: `Who am I? Tab Tab Tab...`,
    },
    menuLinks:[
      {
        name: `Blog`,
        url: `/`,
      },
      {
        name: `About`,
        url: `/about`,
      },
    ],
    description: `A personal blog that recording what I learn & how I feel.`,
    siteUrl: `https://fitmavincent.github.io/`,
    social: {
      twitter: `meh, don't wanna tell you`,
    },
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
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#dbe4ee`,
        theme_color: `#054a91`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-dark-mode',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
