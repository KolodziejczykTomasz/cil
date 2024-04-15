import React, { Fragment, Component } from 'react';
import Footer from '../../component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../../component/NavBar/NavBar';


import './Wcag.css'

class Wcag extends Component {
  state = {
    button: false,
    fontSizeChange: 16,
    fontSizeHeader: 36,
    fontSizeTitle: 1.8
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 16,
      fontSizeHeader: 36,
      fontSizeTitle: 1.8
    });
  };


  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  handleGrowFontSize = () => {
    const number = 1;
    const numberTwo = .1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange + number,
      fontSizeHeader: this.state.fontSizeHeader + number,
      fontSizeTitle: this.state.fontSizeTitle + numberTwo
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    const numberTwo = .1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
      fontSizeHeader: this.state.fontSizeHeader - number,
      fontSizeTitle: this.state.fontSizeTitle - numberTwo
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
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading" style={{fontSize: fontSizeHeader}}>Deklaracja dostępności Centrum Inicjatyw Lokalnych CIL Przestrzeń</h1>
                <p id="a11y-wstep" style={{ fontSize: `${fontSizeTitle}`}}><span id="a11y-podmiot">Centrum Inicjatyw Lokalnych CIL Przestrzeń</span> zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4&nbsp;kwietnia 2019&nbsp;r. o&nbsp;dostępności cyfrowej stron internetowych i&nbsp;aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do strony internetowej <a id="a11y-url" href="https://cilprzestrzen.eu/">Centrum Inicjatyw Lokalnych CIL Przestrzeń</a>.</p>
                <hr />
              </div>
            </div>
            <div>
              <p className="wcagHeader" style={{ fontSize: `${fontSizeTitle}rem`}} >
                Serwis został zaprojektowany tak, aby był możliwy do obsłużenia dla jak najszerszej
                grupy użytkowników, niezależnie od używanej technologii, oprogramowania lub
                posiadanej dysfunkcji. Nieustannie poszukujemy rozwiązań aby zwiększyć dostępność i
                użyteczność naszej strony internetowej. Jeżeli masz jakieś uwagi albo komentarze
                skontaktuj się z nami (cilprzestrzen.eu/contact).
              </p>
              <ul className="wcagList" style={{marginLeft: "30px"}}>             
                <li>Data publikacji strony internetowej: <time id="a11y-data-publikacja" datetime="2016-01-10">2016-01-10</time></li>
    <li>Data ostatniej istotnej aktualizacji: <time id="a11y-data-aktualizacja" datetime="2024-04-13">2024-04-13</time></li>
              </ul>
              <h2>Status pod względem zgodności z ustawą</h2>
    <p>Strona internetowa jest <strong id="a11y-status">zgodna</strong> z&nbsp;ustawą o&nbsp;dostępności cyfrowej stron internetowych i&nbsp;aplikacji mobilnych podmiotów publicznych. </p>




<h2 style={{ fontSize: `${fontSizeTitle}rem`}} > Przygotowanie deklaracji w sprawie dostępności</h2>
<ul style={{marginLeft: "30px"}}>
<li>Deklarację sporządzono dnia:  <time id="a11y-data-sporzadzenie" datetime="2024-04-13">2024-04-13</time></li>
<li>Deklarację została ostatnio poddana przeglądowi i aktualizacji dnia:  <time id="a11y-data-deklaracja-przeglad" datetime="2024-04-13">2024-04-13</time></li>
</ul>

    <p>Deklarację sporządzono na podstawie samooceny. </p>


<h2 id="a11y-kontakt" style={{ fontSize: `${fontSizeTitle}rem`}} >Informacje zwrotne i dane kontaktowe</h2>
<ul style={{marginLeft: "30px"}}>
<li>Za rozpatrywanie uwag i wniosków odpowiada:  <span id="a11y-osoba">Agnieszka Rasińska</span>.</li>
<li>E-mail: <span id="a11y-email">aga.stolarska4@wp.pl</span></li>
<li>Telefon: <span id="a11y-telefon">606946018</span></li>
</ul>

<p id="a11y-procedura" >Każdy ma prawo:</p>
<ul style={{marginLeft: "30px"}}>
    <li>zgłosić uwagi dotyczące dostępności cyfrowej strony lub jej elementu,</li>
    <li>zgłosić żądanie zapewnienia dostępności cyfrowej strony lub jej elementu,</li>
    <li>wnioskować o udostępnienie niedostępnej informacji w innej alternatywnej formie.</li>
</ul>
<p>Żądanie musi zawierać:</p>
<ul style={{marginLeft: "30px"}}> 
    <li>dane kontaktowe osoby zgłaszającej,</li>
    <li>wskazanie strony lub elementu strony, której dotyczy żądanie,</li>
    <li>wskazanie dogodnej formy udostępnienia informacji, jeśli żądanie dotyczy udostępnienia w formie alternatywnej informacji niedostępnej.</li>
</ul>
<p>Rozpatrzenie zgłoszenia powinno nastąpić niezwłocznie, najpóźniej w ciągu 7 dni. Jeśli w tym terminie zapewnienie dostępności albo zapewnienie dostępu w alternatywnej formie nie jest możliwe, powinno nastąpić najdalej w ciągu 2 miesięcy od daty zgłoszenia.</p>

<h2 style={{ fontSize: `${fontSizeTitle}rem`}} >Skargi i odwołania</h2>
<p>Na niedotrzymanie tych terminów oraz na odmowę realizacji żądania można złożyć skargę do organu nadzorującego pocztą lub drogą elektroniczną na adres:</p>
<ul style={{marginLeft: "30px"}}>
<li>Organ nadzorujący: Prezes Stowarzyszenia</li>
<li>Adres: Blanki 13<br />
11-100 Lidzbark Warmiński</li>
<li>E-mail: aga.stolarska4@wp.pl</li>
<li>Telefon: 606946018</li>
</ul>
<p>Skargę można złożyć również do  <a href="https://www.rpo.gov.pl/content/jak-zglosic-sie-do-rzecznika-praw-obywatelskich">Rzecznika Praw Obywatelskich</a>.</p>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Wcag;
