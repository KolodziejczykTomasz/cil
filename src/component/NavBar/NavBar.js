import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <Fragment>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand>
        <span style={{ color: "#366EB4", fontWeight: 600 }}>
          cilprzestrzen.eu
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto justify-content-center"
          style={{ width: "75vw" }}
        >
          <NavLink to="/">
            <button
              type="button"
              class="btn btn-success"
              style={{ width: 130, marginRight: 10 }}
            >
              Home
            </button>
          </NavLink>
          <NavLink to="/news">
            <button
              type="button"
              class="btn btn-warning"
              style={{ width: 130, marginRight: 10 }}
            >
              Aktualności
            </button>
          </NavLink>
          <NavLink to="/about">
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: 130, marginRight: 10 }}
            >
              O nas
            </button>
          </NavLink>
          <NavLink to="/statut">
            <button
              type="button"
              class="btn btn-success"
              style={{ width: 130, marginRight: 10 }}
            >
              Statut
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button
              type="button"
              class="btn btn-warning"
              style={{ width: 130 }}
            >
              Kontakt
            </button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
);

export default NavBar;
