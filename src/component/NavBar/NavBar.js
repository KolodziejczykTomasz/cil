import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <Fragment>
    <Navbar bg="light" expand="lg" fixed="top" role="menu" aria-label="Menu nawigacja">
      <Navbar.Brand>
        <span style={{ color: "#366EB4", fontWeight: 600 }}>
          cilprzestrzen.eu
        </span>
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse id="basic-navbar-nav" role="group">
        <Nav
          className="mr-auto justify-content-center"
          style={{ width: "75vw", backgroundColor: "white" }}
        >
          <NavLink to="/" aria-current="page">
            <button
              aria-label="Home" 
              role="menuitem"
              type="button"
              class="btn btn-outline-success"
              style={{ width: 130, marginRight: 10, color: "black" }}
            >
              Home
            </button>
          </NavLink>
          <NavLink to="/news">
            <button
              aria-label="Aktualności" 
              role="menuitem"
              type="button"
              class="btn btn-outline-warning"
              style={{ width: 130, marginRight: 10, color: "black" }}
            >
              Aktualności
            </button>
          </NavLink>
          <NavLink to="/about">
            <button
              aria-label="O nas" 
              role="menuitem"
              type="button"
              class="btn btn-outline-primary"
              style={{ width: 130, marginRight: 10, color: "black" }}
            >
              O nas
            </button>
          </NavLink>
          <NavLink to="/statut">
            <button
              aria-label="Statut"
              role="menuitem"
              type="button"
              class="btn btn-outline-success"
              style={{ width: 130, marginRight: 10, color: "black" }}
            >
              Statut
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button
              aria-label="Kontakt"
              role="menuitem"
              type="button"
              class="btn btn-outline-warning"
              style={{ width: 130, color: "black" }}
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
