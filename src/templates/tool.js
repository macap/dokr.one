import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/Layout";
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
      <div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="p-4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">{tool.name}</h1>
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
          <hr className="mt-4" />
          <div className="mt-4">
            <h2 className="mb-2 font-bold">Parameters</h2>
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
        </div>
        <div className="bg-slate-200 p-4 h-full">
          <h2 className="text-lg font-bold mb-4">Commands</h2>
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
