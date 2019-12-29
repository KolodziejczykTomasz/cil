import React, { Fragment } from "react";

import Logo from "../../assets/Images/about/1.jpg";

import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Portfolio = () => (
  <Fragment>
    <div style={{ textAlign: "center" }} class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Zrealizowane projekty</h2>
          <hr />
        </div>
      </div>

      <div class="row justify-content-around">
        <div class="col-4">
          <div class="timeline-image">
            <img
              class="img-circle img-responsive img-centered"
              src={Logo}
              alt="Logo projektu"
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h3 class="subheading">ASOS 2014</h3>
            </div>
            <Link to="/asos">
              <p class="text-muted" style={{ color: "#595959" }}>
                Opis
              </p>
            </Link>
          </div>
        </div>
        <div class="col-4">
          <div class="timeline-image">
            <img
              class="img-circle img-responsive img-centered"
              src={Logo}
              alt="Logo projektu"
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h3 class="subheading">CALL II </h3>
            </div>
            <Link to="/call">
              <p class="text-muted" style={{ color: "#595959" }}>
                Opis
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Portfolio;
