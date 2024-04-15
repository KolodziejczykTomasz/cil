import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaSearch, FaSearchMinus, FaSearchPlus, FaAdjust } from 'react-icons/fa';
import './NavBar.css';


const NavBar = ({ clickColorFn, growFontFn, shrinkFontFn, resetFontFn }) => {
    const [fontSize, setFontSize] = React.useState(18);

return (
    <Fragment>
        <div id="skip">
            <NavLink to="/">Skip Content</NavLink>
        </div>
        <header>
            <div id="accesibleWrapper">
                <button id="accessibleIconButtonSearch" className="accessibleIconButton" onClick={() => setFontSize(18)}
                        title="Przycisk początkowej wielkości czcionki na stronie po kliknięciu"
                        aria-label="Przywrócenie początkowej wielkości czcionki na stronie po kliknięciu">
                    <FaSearch
                        id="accesibleIconSearch"
                        className="accesibleIcon"
                        onClick={resetFontFn}
                    />
                </button>
                <button id="accessibleIconButtonSearchMinus" className="accessibleIconButton"
                        aria-label="Zmniejszenie czcionki na stronie po kliknięciu"
                        title="Przycisk zmniejszający czcionki na stronie po kliknięciu"
                        onClick={() => setFontSize(fontSize - 1)}>
                    <FaSearchMinus
                        id="accesibleIconSearchMinus"
                        className="accesibleIcon"
                        onClick={shrinkFontFn}
                    />
                </button>
                <button id="accessibleIconButtonSubmit" className="accessibleIconButton"
                        aria-label="Powiększenie czcionki na stronie po kliknięciu"
                        title="Przycisk powiększający czcionki na stronie po kliknięciu"
                        onClick={() => setFontSize(fontSize + 1)}>
                    <FaSearchPlus
                        id="accesibleIcon"
                        className="accesibleIconPlus"
                        onClick={growFontFn}
                    />
                </button>
                <button id="accessibleIconButtonContrast" className="accessibleIconButton"
                        aria-label="Zmiana kontrastu strony po kliknięciu"
                        title="Przycisk zmieniający kontrast na stronie">
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
                    <span className="brand"
                          style={{color: '#091d31', fontWeight: 600, marginLeft: '10px'}}>cilprzestrzen.eu</span>
                </Navbar.Brand>
                <nav className="collapse navbar-collapse flex-column " id="navbar" aria-label="nawigacja po stronie">
                    <ul className="navbar-nav justify-content-center px-3">
                        <li className="nav-item btn btn-outline-success" aria-label="Home Page"
                            style={{marginRight: 10, color: 'black'}}>
                            <NavLink to="/" style={{fontSize: `${fontSize}px`}}>Home</NavLink>
                        </li>
                        <li className="nav-item btn btn-outline-warning" aria-label="Aktualności"
                            style={{marginRight: 10, color: 'black'}}>
                            <NavLink to="/news" style={{fontSize: `${fontSize}px`}}>Aktualności</NavLink>
                        </li>
                        <li className="nav-item btn btn-outline-primary" aria-label="O nas"
                            style={{marginRight: 10, color: 'black'}}>
                            <NavLink to="/about" style={{fontSize: `${fontSize}px`}}>O nas</NavLink>
                        </li>
                        <li className="nav-item btn btn-outline-primary" aria-label="Projekty"
                            style={{marginRight: 10, color: 'black'}}>
                            <NavLink to="/projekty" style={{fontSize: `${fontSize}px`}}>Projekty</NavLink>
                        </li>
                        <li className="nav-item btn btn-outline-success" aria-label="Statut"
                            style={{marginRight: 10, color: 'black'}}>
                            <NavLink to="/statut" style={{fontSize: `${fontSize}px`}}>Statut</NavLink>
                        </li>
                        <li className="nav-item btn btn-outline-success" aria-label="Partnerzy"
                            style={{marginRight: 10, color: 'black'}}>
                            <NavLink to="/partners" style={{fontSize: `${fontSize}px`}}>Partnerzy</NavLink>
                        </li>
                        <li className="nav-item btn btn-outline-warning" aria-label="Kontakt" style={{color: 'black'}}>
                            <NavLink to="/contact" style={{fontSize: `${fontSize}px`}}>Kontakt</NavLink>
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
    </Fragment>
)
};
export default NavBar;
