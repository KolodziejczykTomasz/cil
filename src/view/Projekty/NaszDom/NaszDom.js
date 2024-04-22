import React, { Fragment, Component } from 'react';
import Logo from '../../../assets/Dok/projekty/NaszDom/plakat.jpg';
import Footer from '../../../component/Footer/Footer';
import NavBar from '../../../component/NavBar/NavBar';
import Regulamin from '../../../assets/Dok/projekty/NaszDom/regulamin.doc';
import Załącznik1 from '../../../assets/Dok/projekty/NaszDom/zal1.docx';
import Załącznik2 from '../../../assets/Dok/projekty/NaszDom/zal2.doc';
import Załącznik3 from '../../../assets/Dok/projekty/NaszDom/zal3.doc';
import Załącznik4 from '../../../assets/Dok/projekty/NaszDom/zal4.doc';
import Załącznik5 from '../../../assets/Dok/projekty/NaszDom/zal5.doc';
import Załącznik6 from '../../../assets/Dok/projekty/NaszDom/zal6.docx';

import 'bootstrap/dist/css/bootstrap.css';
import './NaszDom.css';

class NaszDom extends Component {
  state = {
    button: false,
    fontSizeChange: 1.6,
    fontSizeHeader: 3.6,
    fontSizeTitle: 1.8
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 1.6,
      fontSizeHeader: 3.6,
      fontSizeTitle: 1.8
    });
  };


  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  handleGrowFontSize = () => {
    const number = .1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange + number,
      fontSizeHeader: this.state.fontSizeHeader + number,
      fontSizeTitle: this.state.fontSizeTitle + number
    });
  };

  handleShrinkFontSize = () => {
    const number = .1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
      fontSizeHeader: this.state.fontSizeHeader - number,
      fontSizeTitle: this.state.fontSizeTitle - number
    });
  };
  render() {
    const { fontSizeChange, fontSizeHeader, fontSizeTitle } = this.state;
    return (
      <Fragment>
        <div className={this.state.button ? 'buttonTrue' : 'buttonFalse'}>
          <NavBar
            clickColorFn={this.handleClick}
            growFontFn={this.handleGrowFontSize}
            shrinkFontFn={this.handleShrinkFontSize}
            resetFontFn={this.handleResetFontSize}
          />
          <div className="container" style={{ marginTop: 20, fontSize: `${fontSizeChange}rem` }}>
            <div className="row">
              <div className="col-lg-12 text-center" >
                <h1 className="section-heading" style={{ fontSize: `${fontSizeHeader}rem` }}>RODZINA-NASZ DOM</h1>
                <hr />
              </div>
            </div>
            <div className="row text-left wrapper">
              <img
                className="img-responsive img_kurs"
                src={Logo}
                alt="Plakat projektu kurs na rodzinę"
                title="Plakat projektu kurs na rodzinę"
              />
              <p className="description" style={{ fontSize: `${fontSizeTitle}rem` }}>
                <strong>„RODZINA-NASZ DOM”</strong>
              </p>
              <p className="description" style={{ fontSize: `${fontSizeTitle}rem` }}>
                <strong>Nr wniosku: RPWM.11.02.03-28-0039/19</strong>
              </p>
              <p className="description" style={{ fontSize: `${fontSizeChange}rem` }}>
                <strong>
                  Celem projektu jest zwiększenie dostępu do usług społecznych ukierunkowanych na
                  podniesienie aktywności społecznej i integracja ze środowiskiem lokalnym 45 osób
                  (35 K i 10 M) mieszkańców gminy wiejskiej Orneta zagrożonych ryzykiem ubóstwa i
                  /lub wykluczeniem społecznym poprzez objęcie ich kompleksowym wsparciem w okresie
                  III 2020-V 2021.
                </strong>
              </p>
              <p className="description"  style={{ fontSize: `${fontSizeChange}rem` }}>
                W okresie od 01 marca 2020 r. do 31 maja 2021 r. uczestnicy projektu będą mogli
                skorzystać z poradnictwa specjalistycznego (psycholog, praca socjalna), konsultanta
                rodzinny, warsztatów poprawiających funkcjonowanie rodziny (warsztaty właściwych
                relacji rodzinnych, warsztaty wychowania dziecka bez przemocy, warsztaty wychowania
                dziecka w rodzinie wielodzietnej), organizacji czasu wolnego (praca animatorów,
                zajęcia animacyjne), organizacji inicjatyw środowiskowych.
              </p>
              <p className="description"  style={{ fontSize: `${fontSizeChange}rem` }}>
                Grupą docelowa projektu będzie 45 osób (35K i 10M) z terenu gminy Orneta,
                zagrożonych ryzykiem ubóstwa i/lub wykluczenia społecznego: osób korzystających ze
                świadczeń pomocy społecznej lub kwalifikujących się do objęcia wsparciem pomocy
                społecznej, tj. spełniających co najmniej jedną z przesłanek wykluczenia
                społecznego.
              </p>
              <p className="description"  style={{ fontSize: `${fontSizeChange}rem` }}>
                Rekrutacja potrwa do 31 marca 2020 r. w Miejsko- Gminnym Ośrodku Pomocy Społecznej w
                Ornecie (partnera projektu) oraz w siedzicie Centrum Inicjatyw Lokalnych
                „Przestrzeń”. Zasady rekrutacji określa regulamin rekrutacji dostępny w siedzibie
                CIL „Przestrzeń”, u partnera projektu oraz na stronie internetowej
                www.cilprzestrzen.eu.
              </p>
              <p className="description"  style={{ fontSize: `${fontSizeChange}rem` }}>
                Osoby zainteresowane do udziału w projekcie mogą złożyć dokumenty rekrutacyjne
                osobiście lub za pośrednictwem innych osób w siedzibie MGOPS w Ornecie lub w
                siedzibie CIL „Przestrzeń”.
              </p>

              <p className="description" style={{ fontSize: `${fontSizeChange}rem` }}>
                <strong>Pobierz pliki:</strong>

                <ul style={{ marginLeft: 30, fontSize: `${fontSizeChange}rem` }}>
                  <li>
                    <a href={Regulamin} title="Link przenoszący na stronę załącznika (otwiera się w nowym oknie)" style={{ fontSize: `${fontSizeChange}rem` }}>Regulamin rekrutacji</a>
                  </li>
                  <li>
                    <a href={Załącznik1} title="Link przenoszący na stronę załącznika (otwiera się w nowym oknie)" style={{ fontSize: `${fontSizeChange}rem` }}>Załącznik nr 1</a>
                  </li>
                  <li>
                    <a href={Załącznik2} title="Link przenoszący na stronę załącznika (otwiera się w nowym oknie)" style={{ fontSize: `${fontSizeChange}rem` }}>Załącznik nr 2</a>
                  </li>
                  <li>
                    <a href={Załącznik3} title="Link przenoszący na stronę załącznika (otwiera się w nowym oknie)" style={{ fontSize: `${fontSizeChange}rem` }}>Załącznik nr 3</a>
                  </li>
                  <li>
                    <a href={Załącznik4} title="Link przenoszący na stronę załącznika (otwiera się w nowym oknie)" style={{ fontSize: `${fontSizeChange}rem` }}>Załącznik nr 4</a>
                  </li>
                  <li>
                    <a href={Załącznik5} title="Link przenoszący na stronę załącznika (otwiera się w nowym oknie)" style={{ fontSize: `${fontSizeChange}rem` }}>Załącznik nr 5</a>
                  </li>
                  <li>
                    <a href={Załącznik6} title="Link przenoszący na stronę załącznika (otwiera się w nowym oknie)" style={{ fontSize: `${fontSizeChange}rem` }}>Załącznik nr 6</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}


export default NaszDom;
