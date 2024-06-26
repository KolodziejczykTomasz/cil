import React, { Fragment, Component } from 'react';
import LogoHeaderPost from '../../assets/Images/logo.jpg';
import Footer from '../../component/Footer/Footer';
import NavBar from '../../component/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.css';


class News extends Component {
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
          <div className="container" style={{ marginTop: 100, fontSize: fontSizeChange }}>
            <div className="row" >
              <div className="col-lg-12 text-center" >
                <h1 className="section-heading" style={{fontSize: fontSizeHeader}}>Aktualności</h1>
                <hr />
              </div>
            </div>

            <div className={this.state.button ? 'buttonTrue card' : 'buttonFalse card'} style={{marginTop: '100px', marginBottom: '100px'}}>
              <h2 className="card-title text-center" style={{fontSize: fontSizeTitle}}>Domowe leki z polnej apteki</h2>
              <img
                className="img-responsive img-centered photo" 
                style={{ marginTop: 50 }}
                src={LogoHeaderPost}
                alt="Domowe leki z polnej apteki"
                title="Domowe leki z polnej apteki"
              />
              <div className="card-body">
                <p className="card-text">
                  Stowarzyszenie Centrum Inicjatyw Lokalnych „Przestrzeń” informuje, że w dniu 14
                  czerwca 2019 r. podpisało umowę nr 11/2018/5/PROW o powierzenie grantu z Lokalna
                  Grupą Działania „Warmiński Zakątek” dotyczącą realizacji projektu pn. „Domowe leki
                  z polnej apteki”. Projekt realizowany jest w ramach Programu Rozwoju Obszarów
                  Wiejskich na lata 2014 – 2020 w ramach działania „Wsparcie na wdrażanie operacji w
                  ramach strategii rozwoju lokalnego kierowanego przez społeczność”.
                </p>
                <p className="card-text">
                  Celem realizowanego projektu jest wzrost wiedzy nt. roli i znaczenia owadów
                  zapylających dla równowagi środowiska przyrodniczego oraz sposobów pozyskiwania i
                  leczniczego wykorzystania przez człowieka produktów pszczelich.
                </p>
                <p className="card-text">
                  Projekt kierowany jest do grupy 10 osób, mieszkańców wsi Blanki należących do grup
                  defaworyzowanych: kobiet zamieszkujących obszary wiejskie, osób powyżej 50 roku
                  życia. Osoby te wezmą udział w działaniach projektowych tj. warsztatach
                  pszczelarskich w wymiarze 55 godzin. Podczas prowadzonych warsztatów
                  pszczelarskich uczestnicy projektu zdobędą wiedzę teoretyczną oraz praktyczną z
                  zakresu:
                </p>
                <p className="card-text">Planowane do osiągnięcia efekty realizacji projektu:</p>
                <ul style={{marginLeft: "30px"}}>
                  <li>liczba osób przeszkolonych – 10 </li>
                  <li>
                    liczba zrealizowanych projektów z zakresu ochrony środowiska i zmian
                    klimatycznych – 1
                  </li>
                  <li>
                    liczba osób, które wzięły udział w szkoleniach, projektach z zakresu ochrony
                    środowiska i zmian klimatycznych – 10
                  </li>
                </ul>
                <p className="card-text">
                  Szczegółowe informacje nt. realizowanego projektu można uzyskać pod numerem
                  telefonu: 606-946-018
                </p>
                <p className="card-text">
                  <small className="text-muted-custom" style={{ marginTop: 50 }}>
                    Data publikacji: 28 czerwiec 2019r. Autor: Admin
                  </small>
                </p>
              </div>
            </div>
            <hr />
            <div className={this.state.button ? 'buttonTrue card' : 'buttonFalse card'} style={{marginTop: '100px', marginBottom: '100px'}}>
              <h2 className="card-title text-center">Animacje szansą lokalnego rozwoju</h2>
              <img
                className="img-responsive img-centered photo"
                style={{ marginTop: 50 }}
                src={LogoHeaderPost}
                alt="Animacje szansą lokalnego rozwoju"
              />
              <div className="card-body">
                <p className="card-text">
                  Stowarzyszenie Centrum Inicjatyw Lokalnych „Przestrzeń” w okresie 12.2018-03-2019
                  zrealizowało projekt pn. „Animacje szansą lokalnego rozwoju” dofinansowany ze
                  środków Programu Rozwoju Obszarów Wiejskich na lata 2014-2020. Kwota
                  dofinansowania: 18 381,00zł.
                </p>
                <p className="card-text">
                  W działaniach projektowych udział wzięło 48 osób z 4 miejscowości: Koniewo,
                  Stryjkowo, Nowa Wieś Wielka, Morawa.
                </p>
                <p className="card-text">
                  W ramach projektu w okresie XII 2018 - III 2019 odbył się cykl spotkań
                  warsztatowych (po 10 spotkań 3 godzinnych na 1 miejscowość), podczas których
                  uczestnicy angażowani byli do różnych ćwiczeń animacyjnych, mających na celu
                  lepszą integrację, zmotywowania i wzajemne poznawanie się w nowych sytuacjach.
                  Warsztaty prowadzone były przy zastosowaniu różnych innowacyjnych technik
                  animacyjnych, aby były interesujące dla danej grupy odbiorców i aktywizowały ich
                  jednocześnie do wspólnej pracy.
                </p>
                <p className="card-text">
                  W ramach zajęć uczestnicy opracowali jeden projekt (inwestycyjny bądź nie
                  inwestycyjny) dotycząy rozwoju swojej wsi i jej mieszkańców. Zajęcia animacyjne
                  polegały na: identyfikowaniu i analizowaniu potrzeb społecznych, problemów
                  społecznych i potencjału społecznego (mapa potrzeb, analiza celów i wybór pomysłów
                  do dalszej pracy), analizie zasobów wsi (praca pod kątem wioski tematyznej),
                  opracowaniu koncepcji projektów pod kątem potrzeby grupy docelowej.
                </p>
                <p className="card-text">
                  Dodatkowo w ramach projektu zorganizowany został wyjazd do Jonkowa na Lawendowe
                  Pola. W wyjeździe uczestniczyło 20 osób(po 5 z każdej miejscowości). Uczestnicy
                  wyjazdu studyjnego mieli zapewniony transport, wyżywienie oraz udział w
                  warsztatach.
                </p>
                <p className="card-text">
                  Szczegółowe informacje nt. realizowanego projektu można uzyskać pod numerem
                  telefonu: 606-946-018
                </p>
                <p className="card-text">
                  <small className="text-muted-custom" style={{ marginTop: 50 }}>
                    Data publikacji: -, Autor: Admin
                  </small>
                </p>
              </div>
            </div>
            <hr />
            <div className={this.state.button ? 'buttonTrue card' : 'buttonFalse card'} style={{marginTop: '100px', marginBottom: '100px'}}>
              <h2 className="card-title text-center">
                Innowacje społeczne wzmacniające kapitał społeczny wsi tematycznej Blanki
              </h2>
              <img
                className={"img-responsive img-centered photo"}
                style={{ marginTop: 50 }}
                src={LogoHeaderPost}
                alt="Innowacje społeczne"
              />
              <div className="card-body">
                <p className="card-text">
                  Stowarzyszenie Centrum Inicjatyw Lokalnych „Przestrzeń” informuje, że w dniu 26
                  kwietnia 2018 r. podpisało umowę nr 10/2017/1/PROW o powierzenie grantu z Lokalna
                  Grupą Działania „Warmiński Zakątek” dotyczącą realizacji projektu pn. „Innowacje
                  społeczne wzmacniające kapitał społeczny wsi tematycznej Blanki”. Projekt
                  realizowany jest w ramach Programu Rozwoju Obszarów Wiejskich na lata 2014 – 2020
                  w ramach działania „Wsparcie na wdrażanie operacji w ramach strategii rozwoju
                  lokalnego kierowanego przez społeczność”.
                </p>
                <p className="card-text">
                  Celem realizowanego projektu jest wzmocnienie kapitału społecznego wsi tematycznej
                  Blanki poprzez przeprowadzenie cyklu innowacyjnych warsztatów pamiątkarskich oraz
                  szkolenia z zakresu turystyki.
                </p>
                <p className="card-text">
                  Uczestnikami projektu ma zostaćo 12 osób – kobiet zamieszkujących obszary
                  wiejskie, które wezmą udział w działaniach projektowych tj. szkoleniu z zakresu
                  turystyki wiejskiej oraz cyklu warsztatów pamiątkarskich. Podczas prowadzonych
                  warsztatów pamiątkarskich uczestnicy projektu będą wykonywali pamiątki regionalne
                  m. in. metodą linorytu, malarstwa na szkle, wykonywanie papieru czerpanego,
                  aniołków ze sklejki.
                </p>
                <p className="card-text">
                  Dzięki prowadzonym warsztatom pamiątkarskim wykonane zostaną pamiątki regionalne
                  oparte o zasoby naturalne i nawiązujące do zielarskiej wsi tematycznej Blanki w
                  formie m. in. magnesów, zakładek do książek, aniołków, breloczków, witraży na
                  szkle.
                </p>
                <p className="card-text">Planowane do osiągnięcia efekty realizacji projektu:</p>
                <ul style={{marginLeft: "30px"}}>
                  <li>liczba spotkań, działań integracyjnych – 30 </li>
                  <li>
                    liczba osób, których kompetencje społeczne i udział w życiu lokalnym wzrósł
                    poprzez działania projektowe - 12
                  </li>
                </ul>

                <p className="card-text">
                  Szczegółowe informacje nt. realizowanego projektu można uzyskać pod numerem
                  telefonu: 606-946-018
                </p>
                <p className="card-text">
                  <small className="text-muted-custom" style={{ marginTop: 50 }}>
                    Data publikacji: -, Autor: Admin
                  </small>
                </p>
              </div>
            </div>
          </div>
          <Footer fontSizeSubtitle={this.state.fontSizeSubtitle} />
        </div>
      </Fragment>
    );
  }
}

export default News;
