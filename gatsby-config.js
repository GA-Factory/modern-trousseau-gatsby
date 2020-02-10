module.exports = {
  siteMetadata: {
    title: "Gatsby Storybook Starter",
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Storybook Starter",
        short_name: "Gatsby Storybook Starter",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#744C9E",
        display: "standalone",
        icon: "src/assets/logos/icon.png"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/`,
        name: "src"
      }
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components"
  ]
};
