import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import SEO from "../components/seo";

const Jumbotron = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 mb-20 ">
    <div className="text-center w-full mx-auto md:py-12 md:px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        Docker oneliners
      </h1>
      <h2 className="text-2xl mt-1">
        <span className="block">
          Spin up <span className="text-indigo-500">tool</span> with one line
        </span>
      </h2>
      <p className="text-xl mt-4 max-w-md mx-auto text-gray-400 mb-6">
        Use dockerized tools to avoid cluttering your system and wasting time on
        installation
      </p>

      <div className="mt-12 lg:flex-shrink-0">
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
      <SEO title="Docker oneliners to quickly run dockerized tools" />
      <Jumbotron data={data.allToolsJson.nodes} />
      <div className="max-w-screen-xl mx-auto p-8">
        <h3 className="text-center mb-6 mt-10 text-lg font-medium text-gray-400 uppercase">
          All tools
        </h3>
        <ToolsList data={buildCategoryTree(data.allToolsJson.nodes)} />
        <h3 className="text-center mb-6 mt-10 text-lg font-medium text-gray-400 uppercase">
          How it works?
        </h3>
        <p className="text-md mt-2 mx-auto text-gray-400 mb-6">
          Docker oneliners will allow you to start a tool with just one command,
          using prebuilt images, without needing to worry about dependencies,
          package managers or cluttering your system.
        </p>
        <p className="text-md mt-2 mx-auto text-gray-400 mb-6">
          You can also use it to quickly test a tool you consider using, and if
          you are not happy, get rid of it with just one command line.
        </p>
        <p className="text-md mt-2 mx-auto text-gray-400 mb-6">
          Each tool listed on this website provides a list of commands to
          quickly get started, as well as inputs for additional parameters,
          which allow you to set up your custom configuration. This is very
          often used to change default port on which the tool is exposed or set
          up environment variables easily. You don't need to remember variables
          names for specific project anymore.
        </p>
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
