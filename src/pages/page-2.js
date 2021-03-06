import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <div class="buttons">
      <Link to="/" class="button is-primary">
        Back to home
      </Link>

      {/* <a class="button is-link">Link</a> */}
    </div>
  </Layout>
);

export default SecondPage;
