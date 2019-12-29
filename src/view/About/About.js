import React, { Fragment } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/NavBar/NavBar";
import ScrollUpButton from "react-scroll-up-button";


const About = () => (
  <Fragment>
    <NavBar />
    <div class="container" style={{ marginTop: 100 }}>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">O nas</h2>
          <hr />
        </div>
      </div>
      <h3> Władze stowarzyszenia: </h3>
      <table
        class="table table-bordered"
        style={{ width: 700, margin: "50 auto 10 auto" }}
      >
        <thead>
          <tr>
            <th>Funkcja</th>
            <th>Imię i nazwisko</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PREZES</td>
            <td>Agnieszka Rasińska</td>
          </tr>
          <tr>
            <td>WICEPREZES</td>
            <td>Paulina Barcikowska-Zubel</td>
          </tr>
          <tr>
            <td>SKARBNIK</td>
            <td>Tadeusz Staszewski</td>
          </tr>
          <tr>
            <td>SEKRETARZ</td>
            <td>Aneta Dąbrowska</td>
          </tr>
          <tr>
            <td>CZLONEK ZARZADU</td>
            <td>Ewa Wezelowska</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />

      <h4>Główne działania statutowe:</h4>
      <ul>
        <li>
          rozwijanie i propagowanie wszelkich form samoorganizacji społecznej na
          terenie gminy Lidzbark Warmiński,
        </li>
        <li>
          podejmowanie, wspieranie współuczestniczenie w inicjatywach
          gospodarczych mających na celu wzmocnienie potencjału gospodarczego
          mieszkańców gminy,
        </li>
        <li>
          integrowanie różnych grup mieszkańców w działaniach zmierzających do
          poprawy jakości życia i rozwoju społeczno-gospodarczego gminy,
        </li>
        <li>
          działalność wspomagająca rozwój gospodarczy, w tym rozwój
          przedsiębiorstwa,
        </li>
        <li>
          aktywne przeciwdziałanie bezrobociu poprzez podejmowanie inicjatyw w
          zakresie tworzenia nowych miejsc pracy, szkoleń zawodowych, kursów
          informacyjnych, tworzenia banków danych o miejscowym rynku pracy,
        </li>
        <li>
          propagowanie wśród mieszkańców, a zwłaszcza dzieci i młodzieży postaw
          zmierzających do samorealizacji,
        </li>
        <li>
          podtrzymywanie i propagowanie miejscowych tradycji kulturowych oraz
          inicjowanie nowych działań w tym zakresie,
        </li>
        <li>
          wspieranie organizacji pozarządowych w ich działalności statutowej,
        </li>
        <li>podejmowanie działań na rzecz integracji sektora pozarządowego,</li>
        <li>
          sprzyjanie rozwojowi współpracy pomiędzy władzami samorządowymi i
          środowiskiem biznesu a organizacjami pozarządowymi,
        </li>
        <li>
          promowanie przedsiębiorczości indywidualnej i wspieranie osób
          bezrobotnych,
        </li>
        <li>
          tworzenie szeroko pojętego społeczeństwa obywatelskiego dzięki
          promowaniu postaw prospołecznych,
        </li>
        <li>zwiększenie znaczenia sektora pozarządowego w życiu publicznym,</li>
        <li>
          przeciwdziałanie wykluczeniu społecznemu i dyskryminacji osób
          niepełnosprawnych,
        </li>
        <li>
          wspieranie inicjatyw społecznych, rządowych i samorządowych
          nakierowanych na budowę demokratycznego państwa prawa,
        </li>
        <li>
          organizowanie sesji, spotkań, debat, szkoleń, współpracy z innymi
          organizacjami, stowarzyszeniami i instytucjami krajowymi i
          zagranicznymi w zakresie realizacji celów CIL "PRZESTRZEŃ " i wymiany
          doświadczeń,
        </li>
        <li>
          prowadzenie konsultacji i działalności doradczej dla organizacji
          pozarządowych oraz innych instytucji i osób fizycznych,
        </li>
        <li>działania na rzecz aktywizacji mieszkańców terenów wiejskich</li>
        <li>upowszechnianie idei ekonomii społecznej,</li>
        <li>działania na rzecz edukacji ekologiczne,</li>
        <li>
          działania na rzecz zrównoważonego rozwoju oraz w zakresie ochrony
          środowiska,
        </li>
        <li>działania na rzecz kultury oświaty i sportu.</li>
      </ul>
    </div>
    <Footer />
    <ScrollUpButton />
  </Fragment>
);

export default About;
