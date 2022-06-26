import * as React from "react";
import Layout from "../components/Layout";

// markup
const TextPage = ({ pageContext }) => {
  return (
    <Layout>
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
