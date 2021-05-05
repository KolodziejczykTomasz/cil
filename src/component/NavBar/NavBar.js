import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaSearch, FaSearchMinus, FaSearchPlus, FaAdjust } from 'react-icons/fa';
import './NavBar.css';

const NavBar = ({ clickColorFn, growFontFn, shrinkFontFn, resetFontFn }) => (
  <Fragment>
    <div aria-label="Menu accesible" id="accesibleWrapper">
      <button type="submit" id="accessibleIconButton">
        <FaSearch
          id="accesibleIcon"
          aria-label="Przywrócenie początkowej wielkości czcionki na stronie po kliknięciu"
          onClick={resetFontFn}
          aria-hidden="true"
        />
      </button>
      <button type="submit" id="accessibleIconButton">
        <FaSearchMinus
          id="accesibleIcon"
          aria-label="Zmniejszenie czcionki na stronie po kliknięciu"
          onClick={shrinkFontFn}
          aria-hidden="true"
        />
      </button>
      <button type="submit" id="accessibleIconButton">
        <FaSearchPlus
          id="accesibleIcon"
          aria-label="Powiększenie czcionki na stronie po kliknięciu"
          onClick={growFontFn}
          aria-hidden="true"
        />
      </button>
      <button type="submit" id="accessibleIconButton">
        <FaAdjust
          id="accesibleIcon"
          aria-label="Zmiana kontrastu strony po kliknięciu"
          onClick={clickColorFn}
          aria-hidden="true"
        />
      </button>
    </div>

    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div class="navbar-toggler-right">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <Navbar.Brand>
        <span style={{ color: '#366EB4', fontWeight: 600, marginLeft: '10px' }}>
          cilprzestrzen.eu
        </span>
      </Navbar.Brand>
      <nav class="collapse navbar-collapse flex-column " id="navbar">
        <ul class="navbar-nav  w-100 justify-content-center px-3">
          <li class="nav-item active">
            <NavLink to="/" aria-current="page">
              <button
                aria-label="Home"
                role="menuitem"
                type="button"
                className="btn btn-outline-success"
                style={{ marginRight: 10, color: 'black' }}
              >
                Home
              </button>
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink to="/news">
              <button
                aria-label="Aktualności"
                role="menuitem"
                type="button"
                className="btn btn-outline-warning"
                style={{ marginRight: 10, color: 'black' }}
              >
                Aktualności
              </button>
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink to="/about">
              <button
                aria-label="O nas"
                role="menuitem"
                type="button"
                className="btn btn-outline-primary"
                style={{ marginRight: 10, color: 'black' }}
              >
                O nas
              </button>
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink to="/projekty">
              <button
                aria-label="Projekty"
                role="menuitem"
                type="button"
                className="btn btn-outline-primary"
                style={{ marginRight: 10, color: 'black' }}
              >
                Projekty
              </button>
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink to="/statut">
              <button
                aria-label="Statut"
                role="menuitem"
                type="button"
                className="btn btn-outline-success"
                style={{ marginRight: 10, color: 'black' }}
              >
                Statut
              </button>
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink to="/partners">
              <button
                aria-label="Partnerzy"
                role="menuitem"
                type="button"
                className="btn btn-outline-success"
                style={{ marginRight: 10, color: 'black' }}
              >
                Partnerzy
              </button>
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink to="/contact">
              <button
                aria-label="Kontakt"
                role="menuitem"
                type="button"
                className="btn btn-outline-warning"
                style={{ color: 'black' }}
              >
                Kontakt
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  </Fragment>
);

export default NavBar;
