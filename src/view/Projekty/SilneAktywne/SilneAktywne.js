import React, { Fragment, Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import Logo from '../../../assets/Dok/projekty/SilneAktywne/plakat.jpg';
import Footer from '../../../component/Footer/Footer';
import NavBar from '../../../component/NavBar/NavBar';
import Regulamin from '../../../assets/Dok/projekty/SilneAktywne/regulamin.doc';
import Załącznik1 from '../../../assets/Dok/projekty/SilneAktywne/zal1.docx';
import Załącznik2 from '../../../assets/Dok/projekty/SilneAktywne/zal2.doc';
import Załącznik3 from '../../../assets/Dok/projekty/SilneAktywne/zal3.doc';
import Załącznik4 from '../../../assets/Dok/projekty/SilneAktywne/zal4.doc';
import Załącznik5 from '../../../assets/Dok/projekty/SilneAktywne/zal5.doc';
import Załącznik6 from '../../../assets/Dok/projekty/SilneAktywne/zal6.docx';

import { FaPrint } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';

import 'bootstrap/dist/css/bootstrap.css';
import './SilneAktywne.css';

class ComponentToPrintSilneAktywne extends Component {
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
                <h1 className="section-heading">SILNE I AKTYWNE RODZINY</h1>
                <hr />
              </div>
            </div>
            <div className="row text-left wrapper" role="row">
              <img
                className="img-responsive img_kurs"
                src={Logo}
                alt="Plakat projektu kurs na rodzinę"
                title="Plakat projektu silne i aktywne rodziny"
              />
              <p className="description">
                <strong>„SILNE I AKTYWNE RODZINY”</strong>
              </p>
              <p className="description">
                <strong>Nr wniosku: RPWM.11.02.03-28-0038/19</strong>
              </p>
              <p className="description">
                <strong>
                  Celem projektu jest zwiększenie dostępu do usług społecznych ukierunkowanych na
                  podniesienie aktywności społecznej i integracja ze środowiskiem lokalnym 45 (35 K
                  i 10 M) mieszkańców gminy Lidzbark Warmiński, zagrożonych ryzykiem ubóstwa i /lub
                  wykluczeniem społecznym poprzez objęcie ich kompleksowym wsparciem w okresie III
                  2020 – II 2021.
                </strong>
              </p>
              <p className="description">
                W okresie od 01 marca 2020 r. do 28 lutego 2021 r. uczestnicy projektu będą mogli
                skorzystać z poradnictwa specjalistycznego (psycholog, prawnik, doradca zawodowy),
                konsultanta rodzinny, warsztatów poprawiających funkcjonowanie rodziny (warsztaty
                wychowania dziecka w rodzinie wielodzietnej, warsztaty komunikacji interpersonalnej,
                warsztaty umiejętności wychowawczych, warsztaty socjoterapeutyczne, warsztaty
                relacji rodzinnych), organizacji czasu wolnego (praca animatorów, warsztaty
                animacyjne), organizacji inicjatyw środowiskowych.
              </p>
              <p className="description">
                Grupą docelowa projektu będzie 11 rodzin/45 osób (35K i 10M) z terenu gminy Lidzbark
                Warmiński, zagrożonych ryzykiem ubóstwa i/lub wykluczenia społecznego: osób
                korzystających ze świadczeń pomocy społecznej lub kwalifikujących się do objęcia
                wsparciem pomocy społecznej, tj. spełniających co najmniej jedną z przesłanek
                wykluczenia społecznego.
              </p>
              <p className="description">
                Rekrutacja potrwa do 31 marca 2020 r. w siedzicie Centrum Inicjatyw Lokalnych
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
                </ul>
              </p>
            </div>
          </div>
          <Footer />
        </div>
        <ScrollUpButton />
      </Fragment>
    );
  }
}

class SilneAktywne extends Component {
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
        <ComponentToPrintSilneAktywne ref={el => (this.componentRef = el)} />
      </p>
    );
  }
}
export default SilneAktywne;

