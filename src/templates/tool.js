import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { commandCompiler } from "../lib/commandCompiler";

const Tools = ({ data }) => {
  const tool = data.allToolsJson.nodes[0];
  const [state, setState] = useState(
    tool.variables.reduce((acc, val) => {
      acc[val.name] = val.default;
      return acc;
    }, {})
  );

  return (
    <Layout>
      <SEO
        title={`How to configure and run ${tool.name} in docker?`}
        description={
          tool.description && tool.description.length ? tool.description : null
        }
      />
      <div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="p-4">
          <div className="mb-4">
            <h1 className="text-2xl">
              Running and configuring{" "}
              <strong className="font-bold">{tool.name}</strong> in docker
            </h1>
            <ul>
              {tool.tags.map((tag) => (
                <li className="text-slate-600 inline-block mr-1 text-sm">
                  #{tag}
                </li>
              ))}
            </ul>
            {tool.link ? (
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline	text-teal-500"
              >
                {tool.name} reference
              </a>
            ) : null}
          </div>
          {tool.content ? (
            <article
              className="prose"
              dangerouslySetInnerHTML={{
                __html: tool.content.childMarkdownRemark.html,
              }}
            />
          ) : (
            <article>{tool.description}</article>
          )}
        </div>
        <div className="bg-slate-200 p-4 h-full">
          <div className="p-4 bg-slate-300">
            <h2 className="mb-2 font-bold">Accepted parameters</h2>
            {tool.variables.map((v) => (
              <div className="mb-4">
                <label for={v.name} className="text-slate-600 block">
                  {v.description}
                </label>
                {v.values ? (
                  <select
                    name={v.name}
                    required={v.required}
                    className="border-slate-400 bg-white rounded-sm border-solid border block w-full mt-1 px-2 py-1"
                    onChange={(e) =>
                      setState({ ...state, [v.name]: e.target.value })
                    }
                    value={state[v.name]}
                  >
                    {v.required ? null : <option value="">-</option>}
                    {v.values.map((value) => (
                      <option value={value}>{value}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={state[v.name]}
                    name={v.name}
                    required={v.required}
                    className="border-slate-400 rounded-sm border-solid border block w-full mt-1 px-2 py-1"
                    onChange={(e) =>
                      setState({ ...state, [v.name]: e.target.value })
                    }
                  />
                )}
              </div>
            ))}
          </div>
          <hr className="mt-4" />
          <h2 className="text-lg font-bold mb-4">Available commands</h2>
          {tool.commands.map(({ name, value, description }) => (
            <div className="mb-4">
              <div className="font-bold mb-1">{name}</div>
              {description ? (
                <div className="italic mb-3 text-xs">{description}</div>
              ) : null}
              <div className="bg-slate-100 my-1 rounded px-2 py-1">
                {commandCompiler(value, tool.variables, state)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    allToolsJson(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        category
        description
        label
        name
        slug
        tags
        link
        commands {
          name
          value
          description
        }
        variables {
          name
          default
          required
          description
          values
        }
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default Tools;
