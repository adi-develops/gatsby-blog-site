/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Gatsby Dog Blog Site",
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },],
}

// A closer look at the configuration options:
// When your site builds, gatsby-source-filesystem adds all the files in the folder specified by the path option to the data layer.
// The name option in the configuration object gets set to the sourceInstanceName field for each file.
// This comes in handy when you want to source files from multiple folders.
// By giving each folder a different name option, you can build GraphQL queries that filter down to only a particular folder.