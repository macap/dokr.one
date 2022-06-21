import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";

const Jumbotron = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 ">
    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span className="block">Want to be millionaire ?</span>
        <span className="block text-indigo-500">It&#x27;s today or never.</span>
      </h2>
      <p className="text-xl mt-4 max-w-md mx-auto text-gray-400 mb-6">
        I had noticed that both in the very poor and very rich extremes of
        society the mad were often allowed to mingle freely
      </p>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="md:w-1/3 h-10 mx-auto">
          <Search data={data} />
        </div>
      </div>
    </div>
  </div>
);

const ToolsList = ({ data }) => (
  <div className="container px-6 py-8 mx-auto">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Object.keys(data).map((key) => (
        <div>
          <div className="text-xs font-medium text-gray-400 uppercase">
            {key}
          </div>
          {data[key].map((tool) => (
            <a
              href={`/tools/${tool.slug}`}
              className="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              {tool.name}
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const buildCategoryTree = (data) =>
  data.reduce((acc, v) => {
    acc[v.category] ? acc[v.category].push(v) : (acc[v.category] = [v]);
    return acc;
  }, {});

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto p-8">
        <Jumbotron data={data.allToolsJson.nodes} />
        <ToolsList data={buildCategoryTree(data.allToolsJson.nodes)} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ToolsList {
    allToolsJson(sort: { fields: category }) {
      nodes {
        category
        name
        slug
      }
    }
  }
`;

export default IndexPage;
