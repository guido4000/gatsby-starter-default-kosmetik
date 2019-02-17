import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./layout.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container content has-text-centered">
      <p>
        <strong>
          Kosmetik & Pflege
          <br />
          Ingrid Heitmann
        </strong>
      </p>
      <p>Oberdorf 10, 8585 Happerswil</p>
      <p>
        Email: <a href="mailto:ingrid@heitmann.ch">ingrid@heitmann.ch</a>
      </p>
      <p>
        Telefon: <a href="tel:+41-71-6460212">071 646 02 12</a>
      </p>
      <section style={{ marginTop: `3rem` }}>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="columns">
              <Link class="column" to="/page-2/">
                Impressum
              </Link>
              <Link class="column" to="/page-2/">
                Datenschutz
              </Link>
              <Link class="column" to="/page-2/">
                Anfahrt
              </Link>
              <Link class="column" to="/page-2/">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
