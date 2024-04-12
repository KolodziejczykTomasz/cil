import React, { Fragment, Component } from 'react';
import Logo from '../../../assets/Images/projekty/Kurs/kursPlakat.jpg';
import Footer from '../../../component/Footer/Footer';
import NavBar from '../../../component/NavBar/NavBar';
import Regulamin from '../../../assets/Dok/projekty/Kurs/regulamin rekrutacji -Kiwity.doc';
import Załącznik1 from '../../../assets/Dok/projekty/Kurs/zal-1-formularz-zgłoszeniowy.docx';
import Załącznik2 from '../../../assets/Dok/projekty/Kurs/zał-2-Deklarcja-uczestnictwa osoba pełnoletnia.doc';
import Załącznik3 from '../../../assets/Dok/projekty/Kurs/zał-3-Deklarcja-uczestnictwa-niepełnoletnia-2.doc';
import Załącznik4 from '../../../assets/Dok/projekty/Kurs/Zał-4-Oświadczenie-uczestnika-o-admin-danych-osobowych.doc';
import Załącznik5 from '../../../assets/Dok/projekty/Kurs/Zał-5-Oświadczenie-wizerunek.doc';
import Załącznik6 from '../../../assets/Dok/projekty/Kurs/zal-6-weryfikacja-spełnienia-kryterium.docx';
import Załącznik7 from '../../../assets/Dok/projekty/Kurs/Zał-7 Kwestionariusz rodziny objetej wsparciem.docx';

import { FaPrint } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';

import 'bootstrap/dist/css/bootstrap.css';
import './Kurs.css';

class ComponentToPrintKurs extends Component {
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
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading">KURS NA RODZINĘ W GMINIE KIWITY</h1>
                <hr />
              </div>
            </div>
            <div className="row text-left wrapper">
              <img
                className="img-responsive img_kurs"
                src={Logo}
                alt="Plakat projektu kurs na rodzinę"
              />
              <p className="description">
                <strong>„KURS NA RODZINĘ W GMINIE KIWITY”</strong>
              </p>
              <p className="description">
                <strong>Nr wniosku: RPWM.11.02.03-28-0040/19</strong>
              </p>
              <p className="description">
                <strong>
                  Celem projektu jest zwiększenie dostępu do usług społecznych ukierunkowanych na
                  podniesienie aktywności społecznej i integracja ze środowiskiem lokalnym 45 (35 K
                  i 10 M) mieszkańców gminy Kiwity, zagrożonych ryzykiem ubóstwa i /lub wykluczeniem
                  społecznym poprzez objęcie ich kompleksowym wsparciem w okresie II 2020 – IV 2021.
                </strong>
              </p>
              <p className="description">
                W okresie od 01 lutego 2020 r. do 30 kwietnia 2021 r. uczestnicy projektu będą mogli
                skorzystać z poradnictwa specjalistycznego (psycholog, praca socjalna), konsultanta
                rodzinny, warsztatów poprawiających funkcjonowanie rodziny (warsztaty właściwych
                relacji rodzinnych, warsztaty wychowania dziecka w rodzinie wielodzietnej, warsztaty
                umiejętności wychowawczych), organizacji czasu wolnego (praca animatorów, warsztaty
                animacyjne), organizacji inicjatyw środowiskowych.
              </p>
              <p className="description">
                Grupą docelowa projektu będzie 11 rodzin/45 osób (35K i 10M) z terenu gminy Kiwity,
                zagrożonych ryzykiem ubóstwa i/lub wykluczenia społecznego: osób korzystających ze
                świadczeń pomocy społecznej lub kwalifikujących się do objęcia wsparciem pomocy
                społecznej, tj. spełniających co najmniej jedną z przesłanek wykluczenia
                społecznego.
              </p>
              <p className="description">
                Rekrutacja potrwa do 29 lutego 2020 r. w siedzicie Centrum Inicjatyw Lokalnych
                „Przestrzeń”. Zasady rekrutacji określa regulamin rekrutacji dostępny w siedzibie
                CIL „Przestrzeń” oraz na stronie internetowej www.cilprzestrzen.eu.
              </p>
              <p className="description">
                Osoby zainteresowane do udziału w projekcie mogą złożyć dokumenty rekrutacyjne
                osobiście lub za pośrednictwem innych osób w siedzibie CIL „Przestrzeń”.
              </p>

              <p className="description">
                <strong>Pobierz pliki:</strong>

                <ul style={{ marginLeft: 30 }}>
                  <li>
                    <a href={Regulamin}>Regulamin rekrutacji</a>
                  </li>
                  <li>
                    <a href={Załącznik1}>Załącznik nr 1</a>
                  </li>
                  <li>
                    <a href={Załącznik2}>Załącznik nr 2</a>
                  </li>
                  <li>
                    <a href={Załącznik3}>Załącznik nr 3</a>
                  </li>
                  <li>
                    <a href={Załącznik4}>Załącznik nr 4</a>
                  </li>
                  <li>
                    <a href={Załącznik5}>Załącznik nr 5</a>
                  </li>
                  <li>
                    <a href={Załącznik6}>Załącznik nr 6</a>
                  </li>
                  <li>
                    <a href={Załącznik7}>Załącznik nr 7</a>
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

class Kurs extends Component {
  render() {
    return (
      <p className="print">
        <ReactToPrint
          trigger={() => (
            <button
              aria-label="Drukuj"
              title="Drukuj"
              className="btn btn-link"
            >
              <FaPrint />
            </button>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrintKurs ref={el => (this.componentRef = el)} />
      </p>
    );
  }
}
export default Kurs;
