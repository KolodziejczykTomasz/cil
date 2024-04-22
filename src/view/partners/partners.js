import React, { Fragment, Component } from 'react';
import Logo from '../../assets/Images/manez_logo.jpg';
import Footer from '../../component/Footer/Footer';
import NavBar from '../../component/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import './partners.css';

class Partners extends Component {
  state = {
    button: false,
    fontSizeChange: 14,
    fontSizeSubtitle: 16,
    fontSizeTitle: 24,
    fontSizeHeader: 36
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 14,
      fontSizeSubtitle: 16,
      fontSizeTitle: 24,
      fontSizeHeader: 36
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
      fontSizeSubtitle: this.state.fontSizeSubtitle + number,
      fontSizeHeader: this.state.fontSizeHeader + number,
      fontSizeTitle: this.state.fontSizeTitle + number
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
      fontSizeSubtitle: this.state.fontSizeSubtitle - number,
      fontSizeHeader: this.state.fontSizeHeader - number,
      fontSizeTitle: this.state.fontSizeTitle - number
    });
  };


  render() {
    const { fontSizeChange, fontSizeSubtitle, fontSizeHeader, fontSizeTitle } = this.state;
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
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading" style={{fontSize: fontSizeHeader}}>Partnerzy</h1>
                <hr />
              </div>
            </div>
            <h2 style={{ color: '#853605', fontSize: fontSizeTitle, width: '100%', textAlign: 'center', marginTop: "50px"  }}>
             Kompleksowe zarządzanie nieruchomościami w sektorze prywatnym i komercyjnym
            </h2>
            <div className="row text-left wrapper">
              <img
                className="img-responsive img_kurs"
                src={Logo}
                alt="Logo firmy MANEZ"
                title="Logo firmy MANEZ"
              />
              <p className="description" style={{fontSize: fontSizeSubtitle }}>
                Nawiązaliśmy współpracę z firmą MANEZ Zarządzanie Nieruchomościami, która wdraża na
                naszym terenie innowacyjny system do zarządzania nieruchomościami.{' '}
              </p>
              <p className="description" style={{fontSize: fontSizeSubtitle }}>
                Jeśli wynajmujesz nieruchomość bądź nią zarządzasz to jest to rozwiązanie dla
                Ciebie.
              </p>

              <p className="description" style={{fontSize: fontSizeSubtitle }}>
                Aplikacja mobilna udostępniana przez firmę MANEZ jest narzędziem automatyzującym
                proces zarządzania nieruchomościami. Obsługa nieruchomości, czy zdalny kontakt z
                najemcą będzie szybki, sprawny i bezproblemowy. Naliczanie opłat, wystawianie FV,
                księgowanie wpłat najemców i realizowanie przelewów na zewnątrz odbędzie się
                automatycznie oszczędzając Twój czas.
              </p>

              <p className="description" style={{fontSize: fontSizeSubtitle }}>
                Dzięki aplikacji mobilnej każdy najemca czy użytkownik nieruchomości będzie płacił
                za faktyczne zużycie mediów i śmieci.{' '}
              </p>

              <p className="description" style={{fontSize: fontSizeSubtitle }}>Zobacz jak to działa: https://www.manez.pl</p>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Partners;
