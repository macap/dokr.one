module.exports = {
  siteMetadata: {
    title: `Docker oneliners · dokr.one`,
    siteUrl: `https://dokr.one`,
    titleTemplate: "%s · dokr.one",
    description:
      "Docker oneliners to quickly start tools and services. You don't need to install postgres database, redis or wordpress locally",
    url: "https://dokr.one",
    image: "/ogimage.png",
  },
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: "58a2a354-154b-4df1-a8d2-28eddf65783c",
        srcUrl: "https://analytics.bieda.it/umami.js",
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
  ],
};
