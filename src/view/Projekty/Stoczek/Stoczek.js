import React, { Fragment, Component } from 'react';
import Gallery from "./Gallery"
import Footer from '../../../component/Footer/Footer';
import NavBar from '../../../component/NavBar/NavBar';
import stoczek1 from "../../../assets/Images/projekty/Stoczek/stoczek1.jpg"

import 'bootstrap/dist/css/bootstrap.css';
import './Stoczek.css';

class Stoczek extends Component {
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
            <div className="row" >
              <div className="col-lg-12 text-center">
                <h1 className="section-heading" style={{ fontSize: `${fontSizeHeader}rem` }}>Projekt „Stoczek -nasza mała ojczyzna”</h1>
                <hr />
              </div>
            </div>
            <div className="row text-left wrapper">
              <img
                className="img-responsive img_kurs"
                src={stoczek1}
                alt="Plakat projektu Stoczek -nasza mała ojczyzna"
                title="Plakat projektu Stoczek -nasza mała ojczyzna"
              />
              <p className="description" style={{ fontSize: `${fontSizeTitle}rem` }}>
                W ramach tegorocznej edycji konkursu grantowego „Działaj Lokalnie 2021” Polsko –
                Amerykańskiej Fundacji Wolności realizowanego przez Akademię Rozwoju Filantropii w
                Polsce i Lokalną Grupę Działania „Warmiński Zakątek” Centrum Inicjatyw Lokalnych
                „Przestrzeń” w okresie VII – X 2021 realizowało w miejscowości Stoczek (gmina
                Kiwity) projekt pn. „Stoczek – moja mała ojczyzna”
              </p>
              <p className="description"style={{ fontSize: `${fontSizeChange}rem` }}>
                <strong>
                  Celem projektu było stworzenie miejsca integracji mieszkańców Stoczka oraz
                  podniesienie atrakcyjności i estetyki wsi poprzez postawienie w miejscach
                  ogólnodostępnych drewnianych stołów, ławek, donic.
                </strong>
              </p>
              <p className="description"style={{ fontSize: `${fontSizeChange}rem` }}>
                W ramach projektu zostały zakupione deski z których mieszkańcy własnoręcznie
                zbudowali stoły, ławeczki oraz donice. Zbudowana infrastruktura została ustawiona na
                terenie sołectwa Stoczek, w miejscach ogólnodostępnych, w centrum miejscowości.
                Dodatkowo mieszkańcy pozyskali rośliny wieloletnie i dokonali nasadzeń zieleni w
                wykonanych donicach. Dzięki realizacji projektu utworzona została infrastruktura
                rekreacyjna, która służy całej społeczności wsi oraz znacznie poprawiła się estetyka
                wsi Stoczek.
              </p>

              <p className="description"style={{ fontSize: `${fontSizeChange}rem` }}>
                Odbiorcami projektu byli wszyscy mieszkańcy wsi Stoczek, zarówno dzieci jak i osoby
                dorosłe oraz osoby starsze, łącznie ok 160 osób.
              </p>
              <p className="description">
                Główne rezultaty projektu:
                <ul style={{ marginLeft: '30px' }}>
                  <li style={{ fontSize: `${fontSizeChange}rem` }}>wykonanie 2 drewnianych stołów</li>
                  <li style={{ fontSize: `${fontSizeChange}rem` }}>wykonanie 4 ławek drewnianych</li>
                  <li style={{ fontSize: `${fontSizeChange}rem` }}>wykonanie 6 donic drewnianych</li>
                  <li style={{ fontSize: `${fontSizeChange}rem` }}>wzrost integracji mieszkańców wsi Stoczek</li>
                  <li style={{ fontSize: `${fontSizeChange}rem` }}>zacieśnienie więzi międzypokoleniowych wśród mieszkańców wsi Stoczek</li>
                  <li style={{ fontSize: `${fontSizeChange}rem` }}>wzrost atrakcyjności i estetyki wsi Stoczek</li>
                  <li style={{ fontSize: `${fontSizeChange}rem` }}>aktywizacja mieszkańców wsi poprzez wspólną pracę</li>
                </ul>
              </p>
            </div>
            <div>
             <Gallery/>
            </div>
          </div>
          <Footer  
            growFontFn={this.handleGrowFontSize}
            shrinkFontFn={this.handleShrinkFontSize}
            resetFontFn={this.handleResetFontSize} />
        </div>
      </Fragment>
    );
  }
}


export default Stoczek;
