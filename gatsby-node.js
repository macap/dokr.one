const path = require("path");
const fs = require("fs");

exports.createPages = ({ actions }) => {
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
};
