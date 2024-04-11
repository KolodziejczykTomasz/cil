import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaSearch, FaSearchMinus, FaSearchPlus, FaAdjust } from 'react-icons/fa';
import './NavBar.css';

const NavBar = ({ clickColorFn, growFontFn, shrinkFontFn, resetFontFn }) => (
  <Fragment>
    <div aria-label="Menu accesible" id="accesibleWrapper">
      <button type="submit" id="accessibleIconButtonSearch" className="accessibleIconButton" role="img" title="Przycisk początkowej wielkości czcionki na stronie po kliknięciu" aria-label="Przywrócenie początkowej wielkości czcionki na stronie po kliknięciu">
        <FaSearch
          id="accesibleIconSearch"
          className="accesibleIcon"
          onClick={resetFontFn}
        />
      </button>
      <button type="submit" id="accessibleIconButtonSearchMinus" className="accessibleIconButton" aria-label="Zmniejszenie czcionki na stronie po kliknięciu"
              title="Przycisk zmniejszający czcionki na stronie po kliknięciu" role="img">
        <FaSearchMinus
          id="accesibleIconSearchMinus"
          className="accesibleIcon"

          onClick={shrinkFontFn}
        />
      </button>
      <button type="submit" id="accessibleIconButtonSubmit" className="accessibleIconButton" aria-label="Powiększenie czcionki na stronie po kliknięciu"
              title="Przycisk powiększający czcionki na stronie po kliknięciu" role="img">
        <FaSearchPlus
          id="accesibleIcon"
          className="accesibleIconPlus"
          onClick={growFontFn}
        />
      </button>
      <button type="submit" id="accessibleIconButtonContrast" className="accessibleIconButton"aria-label="Zmiana kontrastu strony po kliknięciu"
              title="Przycisk zmieniający kontrast na stronie" role="img">
        <FaAdjust
          id="accesibleIconContrast"
          className="accesibleIcon"
          onClick={clickColorFn}
        />
      </button>
    </div>

    <nav className="navbar navbar-expand-md sticky-top">
      <div className="navbar-toggler-right">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          title="Przycisk włączjący menu mobile"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <Navbar.Brand>
        <span style={{ color: '#091d31', fontWeight: 600, marginLeft: '10px' }}>
          cilprzestrzen.eu
        </span>
      </Navbar.Brand>
      <nav className="collapse navbar-collapse flex-column " id="navbar">
        <ul className="navbar-nav  w-100 justify-content-center px-3" >
          <li className="nav-item active">
            <NavLink to="/">
              <button
                aria-label="Home"
                type="button"
                className="btn btn-outline-success"
                style={{ marginRight: 10, color: 'black' }}
              >
                Home
              </button>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/news">
              <button
                aria-label="Aktualności"
                type="button"
                className="btn btn-outline-warning"
                style={{ marginRight: 10, color: 'black' }}
              >
                Aktualności
              </button>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/about">
              <button
                aria-label="O nas"
                type="button"
                className="btn btn-outline-primary"
                style={{ marginRight: 10, color: 'black' }}
              >
                O nas
              </button>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/projekty">
              <button
                aria-label="Projekty"
                type="button"
                className="btn btn-outline-primary"
                style={{ marginRight: 10, color: 'black' }}
              >
                Projekty
              </button>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/statut">
              <button
                aria-label="Statut"
                type="button"
                className="btn btn-outline-success"
                style={{ marginRight: 10, color: 'black' }}
              >
                Statut
              </button>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/partners">
              <button
                aria-label="Partnerzy"
                type="button"
                className="btn btn-outline-success"
                style={{ marginRight: 10, color: 'black' }}
              >
                Partnerzy
              </button>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/contact">
              <button
                aria-label="Kontakt"
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
