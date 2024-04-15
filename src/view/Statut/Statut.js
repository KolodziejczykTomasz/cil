import React, { Component, Fragment } from 'react';
import NavBar from '../../component/NavBar/NavBar';
import Footer from '../../component/Footer/Footer';

class Status extends Component {
  state = {
    button: false,
    fontSizeChange: 16,
    fontSizeSubtitle: 16,
    fontSizeTitle: 24,
    fontSizeHeader: 36
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 16,
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
          <div className="container" style={{ marginTop: 100, fontSize: fontSizeChange }}>
            <div className="row">
              <div className="col-lg-12 text-center" >
                <h1 className="section-heading" style={{fontSize: fontSizeHeader}}>Statut</h1>
                <h2 className="section-subheading" style={{ fontSize: fontSizeSubtitle }}>
                  STOWARZYSZENIE CENTRUM INICJATYW LOKALNYCH "PRZESTRZEŃ"
                </h2>
              </div>
            </div>

            

            <p style={{ textAlign: 'center' }}>  <strong>Rozdział I</strong></p>
            <p style={{ textAlign: 'center' }}> <strong>Postanowienia ogólne</strong></p>

            <p style={{ textAlign: 'center' }}> <strong>§ 1</strong></p>

            Stowarzyszenie Centrum Inicjatyw Lokalnych „PRZESTRZEŃ” w dalszych postanowieniach zwane
            CIL ”PRZESTRZEŃ” działa na podstawie przepisów ustawy z dnia 7 kwietnia 1989r.- Prawo o
            stowarzyszeniach (tj. Dz.U. z 2001r. Nr79 , poz. 855 ze zm.), ustawy z dnia 24 kwietnia
            2003r. o działalności pożytku publicznego i o wolontariacie (Dz.U. Nr 96, poz.873 ze
            zm.) oraz niniejszego statutu.

            <p style={{ textAlign: 'center' }}><strong>§ 2</strong></p>

            <ol style={{marginLeft: "30px"}}>
              <li>CIL ”PRZESTRZEŃ” posiada osobowość prawną. </li>
              <li>
                Terenem działania CIL ”PRZESTRZEŃ” jest obszar Rzeczpospolitej Polskiej, a siedzibą
                miejscowość Blanki, gmina Lidzbark Warmiński.
              </li>
              <li>
                CIL ”PRZESTRZEŃ” może prowadzić działalność poza granicami Rzeczpospolitej Polski
                zgodnie z obowiązującymi przepisami prawa.
              </li>
            </ol>
            <p style={{ textAlign: 'center' }}><strong>§ 3</strong></p>
            Stowarzyszenie jest apolitycznym, dobrowolnym, samorządnym i trwałym zrzeszeniem w
            celach nie zarobkowych. Stowarzyszenie ma prawo używania pieczęci i oznak zgodnie z
            obowiązującymi przepisami.

            <p style={{ textAlign: 'center' }}><strong>§ 4</strong></p>

            CIL ”PRZESTRZEŃ” może należeć do innych krajów i międzynarodowych organizacji o
            podobnych celach.

            <p style={{ textAlign: 'center' }}><strong>§ 5</strong></p>

            Działalność CIL ”PRZESTRZEŃ” oparta jest przede wszystkim o pracę społeczną swych
            członków. Stowarzyszenie może zatrudniać pracowników do prowadzenia działalności
            statutowej i organizacyjnej.
            <p style={{ textAlign: 'center' }}><strong>§ 6</strong></p>

            CIL ”PRZESTRZEŃ” powołuje się na czas nieokreślony.

            <p style={{ textAlign: 'center' }}><strong>Rozdział II</strong></p>
            <p style={{ textAlign: 'center' }}><strong>Cele i środki działania</strong></p>

            <p style={{ textAlign: 'center' }}><strong>§ 7</strong></p>

            Celem działania CIL ”PRZESTRZEŃ” jest osiągnięcie wszechstronnego
            społeczno-gospodarczego rozwoju powiatu lidzbarskiego.

            <p style={{ textAlign: 'center' }}><strong>§ 8</strong></p>

            Stowarzyszenie CIL „PRSZESTRZEŃ” będzie dążyło do realizacji swojego celu poprzez:
            <ol style={{marginLeft: "30px"}}>
              <li>
                Rozwijanie i propagowanie wszelkich form samoorganizacji społecznej na terenie gminy
                Lidzbark Warmiński;
              </li>
              <li>
                Podejmowanie, wspieranie i współuczestniczenie w inicjatywach gospodarczych mających
                na celu wzmocnienie potencjału gospodarczego mieszkańców gminy;
              </li>
              <li>
                Integrowanie różnych grup mieszkańców w działaniach zmierzających do poprawy jakości
                życia i rozwoju społeczno-gospodarczego gminy;
              </li>
              <li>Działalność wspomagającą rozwój gospodarczy, w tym rozwój przedsiębiorczości;</li>
              <li>
                Aktywne przeciwdziałanie bezrobociu poprzez podejmowanie inicjatyw w zakresie
                tworzenia nowych miejsc pracy, szkoleń zawodowych, kursów informacyjnych, tworzenia
                banków danych o miejscowym rynku pracy;
              </li>
              <li>
                Propagowanie wśród mieszkańców, a zwłaszcza dzieci i młodzieży postaw zmierzających
                do samorealizacji;
              </li>
              <li>
                Podtrzymywanie i propagowanie miejscowych tradycji kulturowych oraz inicjowanie
                nowych działań w tym zakresie;
              </li>
              <li>Wspieranie organizacji pozarządowych w ich działalności statutowej; </li>
              <li>Podejmowanie działań na rzecz integracji sektora pozarządowego; </li>
              <li>
                Sprzyjanie rozwojowi współpracy pomiędzy władzami samorządowymi i środowiskiem
                biznesu a organizacjami pozarządowymi;
              </li>
              <li>Promowanie przedsiębiorczości indywidualnej i wspieranie osób bezrobotnych; </li>
              <li>
                Tworzenie szeroko pojętego społeczeństwa obywatelskiego dzięki promowaniu postaw
                prospołecznych;
              </li>
              <li>Zwiększanie znaczenia sektora pozarządowego w życiu publicznym; </li>
              <li>
                Przeciwdziałanie wykluczeniu społecznemu i dyskryminacji osób niepełnosprawnych;</li>
              <li>
                Wspieranie inicjatyw społecznych, rządowych i samorządowych nakierowanych na budowę
                demokratycznego państwa prawa;
              </li>
              <li>
                Organizowanie sesji, spotkań, debat, szkoleń, współpracy z innymi organizacjami,
                stowarzyszeniami i instytucjami krajowymi i zagranicznymi w zakresie realizacji
                celów CIL ”PRZESTRZEŃ” i wymiany doświadczeń;
              </li>
              <li>
                Prowadzenie konsultacji i działalności doradczej dla organizacji pozarządowych oraz
                innych instytucji i osób fizycznych;
              </li>
              <li>Działania na rzecz aktywizacji mieszkańców terenów wiejskich;</li>
              <li>
                Upowszechnianie idei ekonomii społecznej oraz wspieranie podmiotów ekonomii
                społecznej;
              </li>
              <li>Działania na rzecz edukacji ekologicznej;</li>
              <li>Działania na rzecz zrównoważonego rozwoju oraz w zakresie ochrony środowiska;</li>
              <li>Działania na rzecz kultury i oświaty;</li>
              <li>Działalność na rzecz ochrony zdrowia;</li>
              <li>
                Upowszechnianie i ochronę praw kobiet oraz działalność na rzecz równych praw kobiet
                i mężczyzn;
              </li>
              <li>
                Działania na rzecz pomocy społecznej w tym pomocy rodzinom i osobom w trudnej
                sytuacji życiowej oraz wyrównywanie szans tych rodzin i osób;
              </li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>Rozdział III</strong></p>
             <p style={{ textAlign: 'center' }}><strong>Członkowie- prawa i obowiązki</strong></p>

            <p style={{ textAlign: 'center' }}><strong>§ 9</strong></p>

            Członkami Stowarzyszenia mogą być osoby fizyczne i prawne . Osoba prawna może być
            jedynie członkiem wspierającym stowarzyszenia.

            <p style={{ textAlign: 'center' }}><strong>§ 10</strong></p>

            Stowarzyszenie CIL ”PRZESTRZEŃ” posiada członków:
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>Zwyczajnych</li>
              <li>Wspierających</li>
              <li>Honorowych </li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 11</strong></p>

            <ol style={{marginLeft: "30px"}}>
              <li>Członkiem zwyczajnym stowarzyszenia może być:
              <ol type="a" style={{marginLeft: "30px"}}>
                <li>
                  osoba fizyczna będąca obywatelem polskim, posiadająca pełną zdolność do czynności
                  prawnych, mająca miejsce zamieszkania na terytorium Polski,
                </li>
                <li>cudzoziemiec mający stały pobyt w Polsce.</li>
              </ol></li>
              <li>Warunkiem uzyskania członkowstwa przez osobę o której mowa w pkt.1. jest:
              <ul style={{marginLeft: "30px"}}>
                <li>złożenie deklaracji członkowskiej</li>
                <li>uzyskanie pozytywnej opinii Zarządu</li>
                <li>opłacenie składki członkowskiej </li>
              </ul>
              </li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 12</strong></p>
            
            Członkiem wspierającym CIL „PRZESTRZEŃ” może zostać osoba fizyczna lub prawna
            deklarująca pomoc fizyczną, rzeczową lub merytoryczną w realizacji celów Stowarzyszenia,
            która złoży pisemną deklaracje, a następnie uzyska pozytywną decyzje Zarządu.

            <p style={{ textAlign: 'center' }}><strong>§ 13</strong></p>

            <ol style={{marginLeft: "30px"}}>
              <li>
                Członkiem honorowym CIL „PRZESTRZEŃ” może być osoba fizyczna, która wniosła wybitny
                wkład w działalność i rozwój stowarzyszenia.
              </li>
              <li>                
                Członkowie honorowi są ustanawiani przez Zarząd na wniosek trzech członków
                Stowarzyszenia.
              </li>
              <li>Członkowie honorowi nie opłacają składek członkowskich.</li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 14</strong></p>
            Członkowie zwyczajni mają prawo:
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>biernego i czynnego uczestnictwa w wyborach do władzy CIL „PRZESTRZEŃ”</li>
              <li>
                udziału w zebraniach, wykładach oraz imprezach organizowanych przez CIL
                „PRZESTRZEŃ”,
              </li>
              <li>zgłaszania wniosków dotyczących działalności CIL „PRZESTRZEŃ”</li>
            </ol>
            
            <p style={{ textAlign: 'center' }}><strong>§ 15</strong></p>
            Członkowie zwyczajni mają obowiązek:
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>brania udziału w działalności Stowarzyszenia i realizacji jego celów</li>
              <li>przestrzegania statutu i uchwał władz Stowarzyszenia</li>
              <li>regularnego opłacania SKŁADEK</li>
            </ol>
            <p style={{ textAlign: 'center' }}><strong>§ 16</strong></p>
            Członkowie wspierający i honorowi nie posiadają biernego oraz czynnego prawa wyborczego,
            mogą jednak brać udział z głosem doradczym w statutowych władzach Stowarzyszenia.
            <p style={{ textAlign: 'center' }}><strong>§ 17</strong></p>
            Członkowie honorowi są zwalniani ze składek członkowskich.
            <p style={{ textAlign: 'center' }}><strong>§ 18</strong></p>
            <ol style={{marginLeft: "30px"}}>
              <li>Utrata członkowstwa następuje na skutek:
              <ol type="a" style={{marginLeft: "30px"}}>
                <li>Pisemnej rezygnacji złożonej na ręce Zarządu,</li>
                <li>Wykluczenia przez Zarząd;
                <ul style={{marginLeft: "30px"}}>
                  <li>z powodu łamania statutu i nieprzestrzegania uchwał władz Stowarzyszenia,</li>
                  <li>z powodu notorycznego nie brania udziału w pracach Stowarzyszenia,</li>
                  <li>z powodu niepłacenia składek za okres co najmniej pól roku,</li>
                  <li>na pisemny wniosek co najmniej trzech członków Stowarzyszenia,</li>
                </ul></li>
                <li>
                  śmierci członkowstwa w stowarzyszeniu przez członka Zarządu lub Komisji Rewizyjnej
                  z powodów innych niż określonych w ust.1 pkt. a) i c) jest możliwa tylko decyzją
                  Walnego Zgromadzenia Członków podjęta zwykłą większością głosów w obecności co
                  najmniej połowy członków.
                </li>
              </ol></li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 19</strong></p>

            Od uchwały Zarządu w sprawie pozbawienia członkowstwa, zainteresowanemu przysługuje
            odwołanie do Walnego Zgromadzenia Członków. Uchwała Walnego Zgromadzenia Członków jest
            ostateczna.


            <p style={{ textAlign: 'center' }}><strong>ROZDZIAŁ IV</strong></p>
            <p style={{ textAlign: 'center' }}><strong>Władze Stowarzyszenia</strong></p>

            <p style={{ textAlign: 'center' }}><strong>§ 20</strong></p>
            Władzami stowarzyszenia są:
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>Walne Zgromadzenie Członków</li>
              <li>Zarząd</li>
              <li>Komisja Rewizyjna</li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 21</strong></p>

            Uchwały wszystkich władz Stowarzyszenia zapadają zwykłą większością głosów przy
            obecności co najmniej połowy członków uprawnionych do głosowania chyba, że dalsze
            postanowienia statutu mówią inaczej.

            <p style={{ textAlign: 'center' }}><strong>§ 22</strong></p>

            Kadencja Zarządu i Komisji Rewizyjnej trwa trzy lata, a ich wyboru dokonuje Walne
            Zgromadzenie Członków w głosowaniu jawnym, zwykłą większością głosów przy obecności co
            najmniej połowy uprawnionych do głosowania.

            <p style={{ textAlign: 'center' }}><strong>§ 23</strong></p>

            Członkowie Zarządu i Komisji Rewizyjnej nie otrzymują wynagrodzenia za swoją pracę we
            władzach stowarzyszenia.

            <p style={{ textAlign: 'center' }}><strong>§ 24</strong></p>
            <ol style={{marginLeft: "30px"}}>
              <li>
                Walne Zgromadzenie Członków jest najwyższa władzą Stowarzyszenia. W Walnym
                Zgromadzeniu Członków biorą udział :
             
              <ul style={{marginLeft: "30px"}}>
                <li>z głosem stanowiącym- członkowie zwyczajni</li>
                <li>
                  z głosem doradczym – członkowie wspierający, honorowi oraz zaproszeni goście.
                </li>
              </ul> </li>
              <li>Walne zgromadzenie Członków może być zwyczajne i nadzwyczajne.</li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 25</strong></p>
            <ol style={{marginLeft: "30px"}}>
              <li>
                Walne zgromadzenie Członków zwyczajne jest przez Zarząd Stowarzyszenia. Termin i
                miejsce obrad Zarządu podaje do wiadomości wszystkich członków co najmniej na 14 dni
                przed terminem zebrania.
              </li>
              <li>
                Jeżeli w podanym terminie na Walne Zgromadzenie Członków przybędzie mniej niż połowa
                członków zwyczajnych Stowarzyszenia, Zarząd ustala drugi termin Walnego Zgromadzenia
                Członków, który podaje do wiadomości wszystkich członków co najmniej na 7 dni przed
                terminem zebrania. W drugim terminie zwyczajne Walne Zgromadzenie Członków odbywa
                się bez względu na ilość przybyłych członków.
              </li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 26</strong></p>
            <ol style={{marginLeft: "30px"}}>
              <li>
                Walne zgromadzenie Członków nadzwyczajne może się odbywać w każdym czasie. Jest
                zwołane przez Zarząd z jego inicjatywy, na wniosek Komisji Rewizyjnej lub pisemny
                wniosek co najmniej 1/3 ogólnej liczby członków zwyczajnych Stowarzyszenia.
              </li>
              <li>
                Termin i miejsce obrad nadzwyczajnego Walnego Zgromadzenia Członków Zarząd podaje do
                wiadomości wszystkich członków co najmniej na 7 dni przed terminem zebrania.
              </li>
              <li>
                Jeżeli w podanym terminie na nadzwyczajne Walne Zgromadzenie Członków przybędzie
                mniej niż połowa członków zwyczajnych Stowarzyszenia, Zarząd ustala drugi termin
                Zgromadzenia, który podaje do wiadomości wszystkich członków co najmniej na 4 dni
                przed terminem zebrania. W drugim terminie nadzwyczajne Walne Zgromadzenie Członków
                odbywa się bez względu na ilość przybyłych członków.
              </li>
            </ol>
            
            <p style={{ textAlign: 'center' }}><strong>§ 27</strong></p>
            <ol style={{marginLeft: "30px"}}>
              <li>
                Uchwały Walnego Zgromadzenia Członków zapadają zwykłą większością głosów przy
                obecności co najmniej połowy członków uprawnionych do głosowania. Głosowanie jest
                jawne.
              </li>
              <li>
                Uchwały w sprawie zmiany statutu oraz uchwały o rozwiązaniu Stowarzyszenia zapadają
                większością dwóch trzecich głosów przy obecności co najmniej połowy członków
                uprawnionych do głosowania. Głosowanie jest jawne.
              </li>
              <li>
                W drugim terminie uchwały Walnego Zgromadzenia Członków zapadają zwykłą większością
                głosów ze względu na ilość obecnych członków .Jednak decyzje dotyczące wyboru władzy
                Stowarzyszenia oraz uchwały w sprawie zmiany statutu i uchwała o rozwiązaniu
                Stowarzyszenie zapaść może jedynie przy obecności co najmniej połowy członków
                uprawnionych do głosowania.
              </li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 28</strong></p>

            Do kompetencji Walnego Zgromadzenia należy:
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>Określenie głównych kierunków działania i rozwoju Stowarzyszenia</li>
              <li>Uchwalenie zmian statutu,</li>
              <li>Wybór Prezesa Stowarzyszenia,</li>
              <li>Wybór i odwołanie członków Zarządu, Komisji Rewizyjnej,</li>
              <li>Udzielenie Zarządowi absolutorium na wniosek Komisji Rewizyjnej,</li>
              <li>Rozpatrywanie sprawozdań z działalności Zarządu i Komisji Rewizyjnej,</li>
              <li>
                Uchwalanie wysokości składek członkowskich oraz wszystkich innych świadczeń na rzecz
                Stowarzyszenia,
              </li>
              <li>Rozpatrywanie i zatwierdzanie sprawozdań władz Stowarzyszenia,</li>
              <li>
                Rozpatrywanie wniosków i postulatów zgłaszanych przez członków Stowarzyszenia lub
                jego władze,
              </li>
              <li>Rozpatrywanie odwołań od uchwał Zarządu,</li>
              <li>
                Podejmowanie uchwały o rozwiązaniu Stowarzyszenia i przeznaczeniu jego majątku,
              </li>
              <li>Podejmowanie uchwał w każdej sprawie wniesionej pod obrady,</li>
              <li>Zatwierdzanie budżetu na wniosek zarządu,</li>
              <li>Rozpatrzenie sprawozdań Zarządu z wykonywania budżetu.</li>
            </ol>
            <p style={{ textAlign: 'center' }}><strong>§ 29</strong></p>

            Zarząd jest powołany do kierowania całą działalnością stowarzyszenia zgodnie z uchwałami
            Walnego Zgromadzenia Członków, reprezentuje Stowarzyszenie na zewnątrz.

            <p style={{ textAlign: 'center' }}><strong>§ 30</strong></p>

            Zarząd składa się z Prezesa, dwóch Wiceprezesów, Skarbnika, Sekretarza i dwóch członków.

            <p style={{ textAlign: 'center' }}><strong>§ 31</strong></p>
            <ol style={{marginLeft: "30px"}}>
              <li>W skład Zarządu mogą wchodzić jedynie członkowie zwyczajni stowarzyszenia.</li>
              <li>Osoby wchodzące w skład komisji rewizyjnej nie mogą być członkami Zarządu.</li>
              <li>
                Członkowstwo w Zarządzie ustaje z chwilą ustania członkowstwa w Stowarzyszeniu z
                powodów określonych w §24 ust.1 pkt. a) i c) , ponadto na mocy decyzji Walnego
                Zgromadzenia Członków lub w przypadku pisemnej rezygnacji członkowstwa w Zarządzie.
              </li>
            </ol>

            <p style={{ textAlign: 'center' }}><strong>§ 32</strong></p>
            Posiedzenie Zarządu odbywa się w miarę potrzeb, nie rzadziej jednak niż co sześć
            miesięcy. Szczegółowy tryb podejmowania uchwał przez Zarząd.

            <p style={{ textAlign: 'center' }}><strong>§ 33</strong></p>
            Do kompetencji Zarządu należy:
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>Realizacja celów Stowarzyszenia,</li>
              <li>Wykonywanie uchwał Walnego Zgromadzenia Członków, </li>
              <li>Sporządzanie planów pracy,</li>
              <li>Sprawowanie zarządu nad majątkiem Stowarzyszenia,</li>
              <li>
                Podejmowanie uchwał o nabywaniu, zbywaniu lub obciążaniu majątku Stowarzyszenia,
              </li>
              <li>Reprezentowanie stowarzyszenia na zewnątrz,</li>
              <li>Zwoływanie Walnego Zgromadzenia Członków, </li>
              <li>Organizacja i prowadzenie działalności gospodarczej,</li>
              <li>Przyjmowanie i skreślanie członków,</li>
              <li>Uchwalanie Regulaminu Zarządu,</li>
              <li>Przygotowanie projektu budżetu,</li>
              <li>Wykonywanie uchwały budżetowej.</li>
            </ol>
            <p style={{ textAlign: 'center' }}><strong>§ 34</strong></p>
            
            Komisja Rewizyjna powołana jest do sprawowania kontroli nad działalnością
            Stowarzyszenia. Kontroluje jego działalność nie rzadziej niż raz w roku.
            <p style={{ textAlign: 'center' }}><strong>§ 35</strong></p>

            Komisja Rewizyjna składa się z trzech członków: przewodniczącego, zastępcy i sekretarza.
            <p style={{ textAlign: 'center' }}><strong>§ 36</strong></p>
            <ol style={{marginLeft: "30px"}}>
              <li>
                W skład Komisji Rewizyjnej mogą wchodzić jedynie członkowie zwyczajni
                stowarzyszenia.
              </li>
              <li>Osoby wchodzące w skład Zarządu nie mogą być członkami Komisji Rewizyjnej.</li>
              <li>
                Członkowstwo w Komisji Rewizyjnej ustaje z chwilą ustania członkowstwa w
                stowarzyszeniu z powodów określonych w § ust.1 pkt. a) i c) , ponadto na mocy
                decyzji Walnego Zgromadzenia Członków lub w przypadku pisemnej rezygnacji z
                członkowstwa w Komisji Rewizyjnej.
              </li>

            </ol>
            <p style={{ textAlign: 'center' }}><strong>§ 37</strong></p>
            Do kompetencji Komisji Rewizyjnej należy:
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>kontrolowanie działań stowarzyszenia</li>
              <li>składanie wniosków z kontroli na Walnym Zgromadzeniu Członków,</li>
              <li>prawo żądania zwołania Walnego Zgromadzenia Członków oraz zebrania Zarządu,</li>
              <li>składanie wniosków o absolutorium dla władz Stowarzyszenia,</li>
              <li>składanie sprawozdań ze swojej działalności na Walnym Zgromadzeniu Członków.</li>
            </ol>
            <p style={{ textAlign: 'center' }}>§ 38</p>W razie skład władz Stowarzyszenia ulegnie
            zmniejszeniu w trakcie trwania kadencji, uzupełnienie ich składu może nastąpić w drodze
            kooptacji, której dokonują pozostali członkowie organu, który uległ zmniejszeniu. W tym
            trybie można powołać nie więcej jak jednego członka organu.

            <p style={{ textAlign: 'center' }}><strong>Rozdział V</strong></p>
            <p style={{ textAlign: 'center' }}><strong>Majątek i Fundusze</strong></p>

            <p style={{ textAlign: 'center' }}><strong>§ 39</strong></p>
            Majątek stowarzyszenia powstaje;
            <ol type="a" style={{marginLeft: "30px"}}>
              <li>ze składek członkowskich</li>
              <li>darowizn, spadków, zapisów,</li>
              <li>dochodów z własnej działalności statutowej,</li>
              <li>
                dochodów z nieruchomości i ruchomości będących własnością lub użytkowaniem
                Stowarzyszenia,
              </li>
              <li>dotacji i ofiarności publicznej,</li>
              <li>
                dotacji organów administracji rządowej , samorządowej oraz funduszy europejskich,
              </li>
              <li>
                pozyskiwanie środków finansowych na realizację celów statutowych stowarzyszenia,
              </li>
              <li>innych dotacji,</li>
            </ol>
            <p style={{ textAlign: 'center' }}><strong>§ 40</strong></p>
            Stowarzyszenie może zgodnie z obowiązującymi przepisami prowadzić publiczne zbiórki
            pieniędzy z przeznaczeniem uzyskanych środków na cele statutowe Stowarzyszenia, pod
            warunkiem uzyskania wymaganego zezwolenia.

            <p style={{ textAlign: 'center' }}><strong>§ 41</strong></p>
            Wszelkie środki pieniężne, mogą być przechowywane wyłącznie na koncie bankowym
            Stowarzyszenia.

            <p style={{ textAlign: 'center' }}><strong>§ 42</strong></p>
            1.Majątek Stowarzyszenia jest w całości przeznaczony do realizacji celów statutowych CIL
            „PRZESTRZEŃ” i nie może być dzielony pomiędzy członków w przypadku likwidacji
            stowarzyszenia.
            <p style={{ textAlign: 'center' }}><strong>§ 43</strong></p>

            Stowarzyszenie prowadzi gospodarkę finansową zgodnie z obowiązującymi przepisami.
            <p style={{ textAlign: 'center' }}><strong>§ 44</strong></p>

            Decyzje w sprawie nabywania, zbywania i obciążania majątku, Stowarzyszenia podejmuje
            Zarząd, w ramach przyjętego budżetu.

            <p style={{ textAlign: 'center' }}><strong>§ 45</strong></p>
            Oświadczenia woli w imieniu Stowarzyszenia składa dwóch członków Zarządu, w tym Prezes
            lub Wiceprezes. Dotyczy to również zaciągania zobowiązań majątkowych.

            <p style={{ textAlign: 'center' }}><strong>ROZDZIAŁ VI</strong></p>
            <p style={{ textAlign: 'center' }}><strong>Postanowienie końcowe</strong></p>
            <p style={{ textAlign: 'center' }}><strong>§ 46</strong></p>
            Uchwałę w sprawie zmiany niniejszego statutu oraz uchwałę o rozwiązaniu Stowarzyszenia
            podejmuje Walne Zgromadzenie Członków większością dwóch trzecich głosów , przy obecności
            co najmniej połowy uprawnionych do głosowania. Podejmując uchwałę o rozwiązaniu
            Stowarzyszenia, Walne Zgromadzenie Członków określa sposób jego likwidacji oraz
            przeznaczenie majątku Stowarzyszenia.
            <p style={{ textAlign: 'center' }}><strong>§ 47</strong></p>W sprawach nie uregulowanych w niniejszym
            statucie zastosowanie mają przepisy Prawa o stowarzyszeniach.
            <p style={{ textAlign: 'center' }}><strong>§ 48</strong></p>
            Postanowienia niniejszego statutu wchodzą w życie z dniem uchwalenia.
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <p className="large" style={{margin: '50px 0'}}>Statut przyjęto w dniu 6 marca 2019 r.</p>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Status;
