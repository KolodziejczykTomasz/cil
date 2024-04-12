import React, { Fragment, Component } from 'react';
import Footer from '../../component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../../component/NavBar/NavBar';


import './Wcag.css'

class Wcag extends Component {
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

          <div className="container" style={{ marginTop: 100, fontSize: fontSizeChange }}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading">Oświadczenie o dostępności</h1>
                <hr />
              </div>
            </div>
            <div>
              <p className="wcagHeader">
                Serwis został zaprojektowany tak, aby był możliwy do obsłużenia dla jak najszerszej
                grupy użytkowników, niezależnie od używanej technologii, oprogramowania lub
                posiadanej dysfunkcji. Nieustannie poszukujemy rozwiązań aby zwiększyć dostępność i
                użyteczność naszej strony internetowej. Jeżeli masz jakieś uwagi albo komentarze
                skontaktuj się z nami (cilprzestrzen.eu/contact).
              </p>
              <ul className="wcagList">
                <li> Data publikacji strony internetowej: 2016-01-10</li>
                <li> Data ostatniej istotnej aktualizacji: 2020-09-30</li>
                <li>Oświadczenie sporządzono dnia: 2020-09-30</li>
              </ul>
              <p className="wcagDescritpion">
                Deklarację sporządzono na podstawie samooceny przeprowadzonej przez podmiot
                publiczny
              </p>
              <h2 id="wcagh2">Zgodność ze standardami: </h2>
              <p className="wcagDescritpion">Serwis jest zgodny ze standardami W3C</p>
              <h2 className="wcagh2">Kompatybilność:</h2>
              <p className="wcagDescritpion">
                Strona internetowa jest zgodna z ustawą z dnia 4 kwietnia 2019 r. o dostępności
                cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
              </p>
              <h2 className="wcagh2">Wygląd:</h2>
              <p className="wcagDescritpion">
                Serwis jest wyposażony w mechanizmy ułatwiające przeglądanie treści przez osoby
                niedowidzące. Zmiana wielkości czcionki. Całość serwisu oparta jest na stylach CSS.
                Skróty klawiaturowe: Serwis nie jest wyposażony w skróty klawiaturowe, które mogły
                by wchodzić w konflikt z technologiami asystującymi (np. programy czytające),
                systemem lub aplikacjami użytkowników.
              </p>
              <h2 className="wcagh2"> Dostępność architektoniczna</h2>
              <ul className="wcagList">
                <li>
                  Siedziba Stowarzyszenia znajduje się w budynku w miejscowości Blanki 13, 11-100
                  Lidzbark Warmiński
                </li>
                <li>
                  Budynek nie jest wyposażony w windę, platformę, pochylnię itp. Osoby
                  niepełnosprawnetelefonicznie mogą zgłaszać potrzebę obsługi bez konieczności
                  wchodzenia do budynku
                </li>
                <li>Nie ma przeciwwskazań wstępu osoby niepełnosprawnej z psem asystującym.</li>
                <li>
                  Stowarzyszenie nie ma możliwości zapewnienia tłumacza języka migowego na miejscu
                  lub online.
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Wcag;
