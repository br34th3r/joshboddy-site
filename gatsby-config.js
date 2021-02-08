const dotenv = require('dotenv');
dotenv.config();

const { githubApiQuery } = require('./github-api');

module.exports = {
  siteMetadata: {
    title: `Josh Boddy`,
    description: `Programmer, Musician and Athlete`,
    author: `@br34th3r`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josh Boddy`,
        short_name: `Josh`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql",
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
        graphQLQuery: githubApiQuery,
        variables: {
          github_login: process.env.GITHUB_LOGIN
        }
      }
    }
  ],
}
