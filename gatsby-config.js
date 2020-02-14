const dotenv = require(`dotenv`)

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Storybook Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Storybook Starter',
        short_name: 'Gatsby Storybook Starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#744C9E',
        display: 'standalone',
        icon: 'src/assets/logos/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    }, 
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2n4rer1mpqy8`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
  ],
};
