const path = require("path");
const fs = require("fs");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const template = path.resolve("./src/templates/tool.js");

  const toolPages = fs
    .readdirSync("./src/data/tools", { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name);

  toolPages.forEach((tool) => {
    const slug = tool.replace(".json", "");

    createPage({
      path: "/tools/" + slug,
      component: template,
      context: { slug },
    });
  });

  const textPageTemplate = require.resolve(`./src/templates/text.js`);

  await graphql(`
    {
      allFile(filter: { relativeDirectory: { eq: "text" } }) {
        nodes {
          id
          name
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.error(result.errors);
      return Promise.reject(result.errors);
    }

    return result.data.allFile.nodes.forEach(
      ({ id, name, childMarkdownRemark: { html } }) => {
        createPage({
          path: name,
          component: textPageTemplate,
          context: {
            id,
            name,
            html,
          },
        });
      }
    );
  });
};
