module.exports = {
  siteMetadata: {
    title: `Docker oneliners · How to run X tool in docker · dokr.one`,
    siteUrl: `https://dokr.one`,
    titleTemplate: "%s · dokr.one",
    description:
      "Easily configure and run tools in docker containers. You don't need to clutter your machine or know docker",
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
