import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">
                  Kosmetik & Pflege <br />
                  Ingrid Heitmann
                </h1>
                <h2 className="subtitle">
                  ENTSPANNUNG WELLNESS MUSSE ERHOLUNG AUSZEIT GENUSS RUHE
                  ERFRISCHUNG RELAX
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
);

export default IndexPage;
