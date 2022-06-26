import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

// markup
const TextPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.name} />
      <div className="max-w-screen-xl mx-auto p-8">
        <article
          className="prose"
          dangerouslySetInnerHTML={{
            __html: pageContext.html,
          }}
        />
      </div>
    </Layout>
  );
};

export default TextPage;
