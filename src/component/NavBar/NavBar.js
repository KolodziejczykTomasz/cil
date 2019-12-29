import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";


const NavBar = () => (
  <Fragment>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <Link to="/" class="navbar-brand">
        <span style={{ color: "#366EB4", fontWeight: 600 }}> cilprzestrzen.eu</span>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav mr-auto justify-content-center"
          style={{ width: "75vw" }}
        >
          <li class="nav-item active">
            <NavLink class="nav-link " to="/">
              <button type="button" class="btn btn-success">
                Home <span class="sr-only">(current)</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink class="nav-link" to="/news">
              <button type="button" class="btn btn-warning">
                Aktualności
              </button>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/about">
              <button type="button" class="btn btn-primary">
                O nas
              </button>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/statut">
              <button type="button" class="btn btn-success">
                Statut
              </button>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">
              <button type="button" class="btn btn-warning">
                Kontakt
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </Fragment>
);

export default NavBar;
