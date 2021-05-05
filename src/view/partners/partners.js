import React, { Fragment, Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import Logo from '../../assets/Images/manez_logo.jpg';
import Footer from '../../component/Footer/Footer';
import NavBar from '../../component/NavBar/NavBar';

import { FaPrint } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';

import 'bootstrap/dist/css/bootstrap.css';
import './partners.css';

class ComponentToPrintPartners extends Component {
  state = {
    button: false,
    fontSizeChange: 14,
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 14,
    });
  };

  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  handleGrowFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange + number,
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
    });
  };

  render() {
    const { fontSizeChange } = this.state;
    return (
      <Fragment>
        <div className={this.state.button ? 'buttonTrue' : 'buttonFalse'}>
          <NavBar
            clickColorFn={this.handleClick}
            growFontFn={this.handleGrowFontSize}
            shrinkFontFn={this.handleShrinkFontSize}
            resetFontFn={this.handleResetFontSize}
          />
          <div className="container" style={{ marginTop: 20, fontSize: fontSizeChange }}>
            <div className="row" role="row">
              <div className="col-lg-12 text-center" role="columnheader">
                <h1 className="section-heading">Partnerzy</h1>
                <hr />
              </div>
            </div>
            <h2>
              <span style={{ color: 'orange' }}>Kompleksowe zarządzanie nieruchomościami</span> w
              sektorze prywatnym i komercyjnym
            </h2>
            <div className="row text-left wrapper" role="row">
              <img
                className="img-responsive img_kurs"
                src={Logo}
                alt="Logo firmy MANEZ"
                title="Logo firmy MANEZ"
              />
              <p className="description">
                Nawiązaliśmy współpracę z firmą MANEZ Zarządzanie Nieruchomościami, która wdraża na
                naszym terenie innowacyjny system do zarządzania nieruchomościami.{' '}
              </p>
              <p className="description">
                Jeśli wynajmujesz nieruchomość bądź nią zarządzasz to jest to rozwiązanie dla
                Ciebie.
              </p>

              <p className="description">
                Aplikacja mobilna udostępniana przez firmę MANEZ jest narzędziem automatyzującym
                proces zarządzania nieruchomościami. Obsługa nieruchomości, czy zdalny kontakt z
                najemcą będzie szybki, sprawny i bezproblemowy. Naliczanie opłat, wystawianie FV,
                księgowanie wpłat najemców i realizowanie przelewów na zewnątrz odbędzie się
                automatycznie oszczędzając Twój czas.
              </p>

              <p className="description">
                Dzięki aplikacji mobilnej każdy najemca czy użytkownik nieruchomości będzie płacił
                za faktyczne zużycie mediów i śmieci.{' '}
              </p>

              <p className="description">Zobacz jak to działa: https://www.manez.pl</p>
            </div>
          </div>
          <Footer />
        </div>
        <ScrollUpButton />
      </Fragment>
    );
  }
}

class Partners extends Component {
  render() {
    return (
      <p className="print">
        <ReactToPrint
          trigger={() => (
            <button
              aria-label="Print"
              role="menuitem"
              type="button"
              title="Drukuj"
              className="btn btn-link"
            >
              <FaPrint />
            </button>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrintPartners ref={el => (this.componentRef = el)} />
      </p>
    );
  }
}
export default Partners;
