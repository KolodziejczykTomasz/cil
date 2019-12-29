import React, { Fragment } from "react";
import logoasos from "../../assets/Images/callii.png";
import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/NavBar/NavBar";


const Asos = () => (
  <Fragment>
    <NavBar/>
   
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="section-heading">ASOS2014</h1>
        <hr />
      </div>
    </div>
    <div class="row text-left">
      <img
        class="img-responsive img-centered"
        src={logoasos}
        alt="asos"
      />
      <p>
        <b>CENTRUM INICJATYW LOKALNYCH „PRZESTRZEŃ”</b> z radością informuje, iż
        rozpoczęło realizację projektu pn. „Bądź aktywny w każdym wieku”
        dofinansowanego ze środków Ministerstwa Pracy i Polityki Społecznej w
        ramach Rządowego Programu Na Rzecz Aktywności Społecznej Osób Starszych
        na lata 2014-2020. Celem głównym projektu jest zwiększenie aktywności
        społecznej osób starszych oraz wzrost integracji międzypokoleniowej
        60-cio osobowej grupy osób starszych i dzieci i młodzieży poprzez udział
        tych osób i dzieci w warsztatach artystycznych, kulinarno-cukierniczych
        i edukacyjnych z zakresu profilaktyki zdrowotnej w okresie maj-grudzień
        2014 r. Warsztaty odbywać się będą w świetlicach wiejskich w Rogóżu,
        Ignalinie i Kraszewie.
      </p>
      <p>Okres realizacji projektu: maj 2014-grudzien 2014.</p>
      <p>
        Grupa odbiorców: 10 osób w wieku 60+, 10 osób pozostałych dzieci i
        młodzież.
      </p>
      <p>W ramach projektu przewidziane są następujące działania:</p>
      <ul>
        <li>
          <b>Warsztaty artystyczne (filc, de coupage, florystyka) 30 godzin </b>
          -1 raz w tygodniu po 3 godziny. Podczas zajęć zapewniony będzie
          poczęstunek.
        </li>
        <li>
          <b>Warsztaty kulinarno-cukiernicze – 30 godzin </b>– 1 raz w tygodniu
          po 3 godziny.
        </li>
        <li>
          <b>Wyjazd do kina i teatru </b>– podczas wyjazdu zapewniony będzie
          transport, bilety wstępu i poczęstunek.
        </li>
        <li>
          <b>Organizacja spotkań dot. profilaktyki zdrowia </b>– 2 spotkania po
          3 godziny nt. diet dostosowanych do wieku, chorób cywilizacyjnych:
          cukrzyca, nadciśnienie tętnicze. Uczestnicy będą mieli możliwość
          zbadania poziomu cukru we krwi oraz ciśnienia krwi.
        </li>
        <li>
          <b>Spotkanie podsumowujące projekt </b>– w każdej miejscowości
          odbędzie się spotkanie podsumowujące. Podczas spotkania odbędą się
          występy artystyczne lokalnych zespołów, każdy uczestnik otrzyma drobny
          upominek. Podczas zajęć zapewniony będzie poczęstunek.
        </li>
      </ul>
      Dziękujemy wszystkim uczestnikom/uczestniczkom za zaangażowanie!!! W razie
      pytań dotyczących projektu prosimy o kontakt.
    </div>
  </div>
  <Footer/>
</Fragment>  

);

export default Asos;