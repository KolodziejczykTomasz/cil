import React, { Fragment, Component } from 'react';
import Footer from '../../component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../../component/NavBar/NavBar';



class Cookies extends Component {
  state = {
    button: false,
    fontSizeChange: 1.6,
    fontSizeHeader: 3.6,
    fontSizeSubtitle: 16,
    fontSizeTitle: 1.8
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 1.6,
      fontSizeSubtitle: 16,
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
      fontSizeTitle: this.state.fontSizeTitle + number,
      fontSizeSubtitle: this.state.fontSizeSubtitle + number,
    });
  };

  handleShrinkFontSize = () => {
    const number = .1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
      fontSizeHeader: this.state.fontSizeHeader - number,
      fontSizeTitle: this.state.fontSizeTitle - number,
      fontSizeSubtitle: this.state.fontSizeSubtitle - number,
    });
  };
  render() {
    const { fontSizeChange, fontSizeHeader, fontSizeSubtitle } = this.state;
    return (
      <Fragment>
        <div className={this.state.button ? 'buttonTrue' : 'buttonFalse'}>
          <NavBar clickColorFn={this.handleClick} growFontFn={this.handleGrowFontSize} shrinkFontFn={this.handleShrinkFontSize} resetFontFn={this.handleResetFontSize} />

          <div className="container" style={{ marginTop: 100, fontSize: `${fontSizeChange}rem`}}>
            <div className="row" >
              <div className="col-lg-12 text-center">
                <h1 className="section-heading" style={{ fontSize: `${fontSizeHeader}rem`}}>Polityka prywatności</h1>
                <hr />
              </div>
            </div>
            <div className="row text-left">
              <ul style={{marginLeft: "30px", marginTop: 100}}>
                <li>
                  Poprzez piki “cookies” należy rozumieć dane informatyczne przechowywane w urządzeniach końcowych użytkowników, przeznaczone do
                  korzystania ze stron internetowych. W szczególności są to pliki tekstowe, zawierające nazwę strony internetowej, z której pochodzą,
                  czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                </li>

                <li>
                  Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.
                </li>

                <li>
                  Pliki cookies przeznaczone są do korzystania ze stron serwisu. Operator wykorzystuje te pliki do:
                </li>

                <li>
                  możliwości logowania i utrzymywania sesji użytkownika na każdej
                  kolejnej stronie serwisu
                </li>
                <li>
                  dopasowania zawartości strony internetowej do indywidualnych
                  preferencji użytkownika, przede wszystkim pliki te rozpoznają jego
                  urządzenie, aby zgodnie z jego preferencjami wyświetlić stronę
                </li>
                <li>
                  do tworzenia anonimowych statystyk z wyłączeniem możliwości identyfikacji użytkownika.
                </li>

                <li>
                  Pliki cookies wykorzystywane przez partnerów operatora strony
                  internetowej, w tym w szczególności użytkowników strony
                  internetowej, podlegają ich własnej polityce prywatności.
                </li>

                <li>
                  W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy
                  wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu
                  danych osobom nieupoważnionym. Kontrolujemy ich wykonywanie i stale
                  sprawdzamy ich zgodność z odpowiednimi aktami prawnymi - ustawą o
                  ochronie danych osobowych, ustawą o świadczeniu usług drogą
                  elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i
                  aktach prawa wspólnotowego
                </li>

                <li>
                  Standardowo oprogramowanie służące do przeglądania stron
                  internetowych domyślnie dopuszcza umieszczanie plików cookies na
                  urządzeniu końcowym Użytkownika. Ustawienia te mogą zostać zmienione
                  przez Użytkownika w taki sposób, aby blokować automatyczną obsługę
                  “cookies” w ustawieniach przeglądarki internetowej bądź informować o
                  ich każdorazowym przesłaniu na urządzenia użytkownika.
                </li>

                <li>
                  Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
                  dotyczących plików cookies. Szczegółowe informacje o możliwości i
                  sposobach obsługi plików cookies dostępne są w ustawieniach
                  oprogramowania przeglądarki internetowej.
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"                     
                      href="http://windows.microsoft.com/pl-PL/windows7/How-to-manage-cookies-in-Internet-Explorer-9"
                      title="Link przenoszący na stronę ustawień danej przeglądarki (zawartość otwiera się w nowym oknie)"
                    >
                      - w przeglądarce Internet Explorer
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"                     
                      href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
                      title="Link przenoszący na stronę ustawień danej przeglądarki (zawartość otwiera się w nowym oknie)"
                    >
                      - w przeglądarce Edge
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"                     
                      href="http://support.mozilla.org/pl/kb/ciasteczka"
                      title="Link przenoszący na stronę ustawień danej przeglądarki (zawartość otwiera się w nowym oknie)"
                    >
                      - w przeglądarce Mozilla Firefox
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"                     
                      href="http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"
                      title="Link przenoszący na stronę ustawień danej przeglądarki (zawartość otwiera się w nowym oknie)"
                    >
                      - w przeglądarce Chrome
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"                   
                      href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL&locale=pl_PL"
                      title="Link przenoszący na stronę ustawień danej przeglądarki (zawartość otwiera się w nowym oknie)"
                    >
                      - w przeglądarce Safari
                    </a>
                  </p>
                </li>
                <li>
                  Operator Serwisu informuje, że zmiany ustawień w przeglądarce internetowej użytkownika mogą uniemożliwić poprawne działanie Stron
                  Internetowych.
                </li>
              </ul>
            </div>
          </div>
          <Footer fontSizeSubtitle={fontSizeSubtitle} />
        </div>
      </Fragment>
    );
  }
}

export default Cookies;
