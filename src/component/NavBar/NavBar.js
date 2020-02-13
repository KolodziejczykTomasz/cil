import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import {
  FaSearch, FaSearchMinus, FaSearchPlus, FaAdjust, FaAccessibleIcon,
} from 'react-icons/fa';


import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({
  clickColorFn, growFontFn, shrinkFontFn, resetFontFn,
}) => (
  <Fragment>
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      role="menu"
      aria-label="Menu nawigacja"
    >
      <Navbar.Brand>
        <span style={{ color: '#366EB4', fontWeight: 600 }}>
          cilprzestrzen.eu
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav" role="group">
        <Nav
          className="mr-auto justify-content-center"
          style={{ width: '75vw' }}
        >
          <NavLink to="/" aria-current="page">
            <button
              aria-label="Home"
              role="menuitem"
              type="button"
              className="btn btn-outline-success"
              style={{ width: 130, marginRight: 10, color: 'black' }}
            >
              Home
            </button>
          </NavLink>
          <NavLink to="/news">
            <button
              aria-label="Aktualności"
              role="menuitem"
              type="button"
              className="btn btn-outline-warning"
              style={{ width: 130, marginRight: 10, color: 'black' }}
            >
              Aktualności
            </button>
          </NavLink>
          <NavLink to="/about">
            <button
              aria-label="O nas"
              role="menuitem"
              type="button"
              className="btn btn-outline-primary"
              style={{ width: 130, marginRight: 10, color: 'black' }}
            >
              O nas
            </button>
          </NavLink>
          <NavLink to="/projekty">
            <button
              aria-label="Projekty"
              role="menuitem"
              type="button"
              className="btn btn-outline-primary"
              style={{ width: 130, marginRight: 10, color: 'black' }}
            >
              Projekty
            </button>
          </NavLink>
          <NavLink to="/statut">
            <button
              aria-label="Statut"
              role="menuitem"
              type="button"
              className="btn btn-outline-success"
              style={{ width: 130, marginRight: 10, color: 'black' }}
            >
              Statut
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button
              aria-label="Kontakt"
              role="menuitem"
              type="button"
              className="btn btn-outline-warning"
              style={{ width: 130, color: 'black' }}
            >
              Kontakt
            </button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <div aria-label="Menu accesible">
        <FaAccessibleIcon
          aria-label="Zmiana wielkości czcionki oraz kontrastu strony"
          style={{ marginRight: 15 }}
        />
        <FaSearch
          aria-label="Przywrócenie początkowej wielkości czcionki na stronie po kliknięciu"
          style={{ marginRight: 15 }}
          onClick={resetFontFn}
        />
        <FaSearchMinus
          aria-label="Zmniejszenie czcionki na stronie po kliknięciu"
          onClick={shrinkFontFn}
        />
        <FaSearchPlus
          aria-label="Powiększenie czcionki na stronie po kliknięciu"
          style={{ marginLeft: 15, marginRight: 15 }}
          onClick={growFontFn}
        />
        <FaAdjust
          aria-label="Zmiana kontrastu strony po kliknięciu"
          onClick={clickColorFn}
        />
      </div>
    </Navbar>
  </Fragment>
);

export default NavBar;
