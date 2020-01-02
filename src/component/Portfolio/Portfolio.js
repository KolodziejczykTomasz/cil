import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Images/about/1.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "./Portfolio.css";

const Portfolio = () => (
  <Fragment>
    <div
      style={{ textAlign: "center" }}
      class="container container_portfolio"
      role="row"
      aria-label="Portfolio"
    >
      <div class="row" role="row">
        <div class="col-lg-12 text-center" role="columnheader">
          <h2 class="section-heading">Zrealizowane projekty</h2>
          <hr />
        </div>
      </div>
      <div class="row justify-content-around" role="row">
        <div class="col-lg-4 col-sm-12">
          <div class="timeline-image">
            <img
              class="img-circle img-responsive img-centered img_portfolio"
              src={Logo}
              alt="Logo projektu"
              role="presentation"
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading" role="columnheader">
              <h3 class="subheading">ASOS 2014</h3>
            </div>
            <Link to="/asos">
              <p class="text-muted" style={{ color: "#595959" }}>
                Opis
              </p>
            </Link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="timeline-image">
            <img
              class="img-circle img-responsive img-centered img_portfolio"
              src={Logo}
              alt="Logo projektu"
              role="presentation"
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading" role="columnheader">
              <h3 class="subheading">CALL II </h3>
            </div>
            <Link to="/call">
              <p class="text-muted" style={{ color: "#595959" }}>
                Opis
              </p>
            </Link>
          </div>
        </div>
      </div>{" "}
      <hr />
    </div>
  </Fragment>
);

export default Portfolio;
