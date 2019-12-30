import React, { Fragment } from "react";
import callii from '../../assets/Images/callii.png';
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/NavBar/NavBar";
import ScrollUpButton from "react-scroll-up-button";

const Asos = () => (
  <Fragment>
    <NavBar />
    <div class="container" style={{ marginTop: 100 }}>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="section-heading">CALL II</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <img class="img-responsive img-centered" src={callii} alt="call ii" />
        <p>
          <b>CENTRUM INICJATYW LOKALNYCH „PRZESTRZEŃ”</b> z radością informuję,
          że rusza kolejna edycja Centrum Aktywności Lokalnej II.
        </p>

        <p>
          Dzięki pozyskanym funduszom z Ministerstwa Ministerstwa Pracy i
          Polityki Społecznej w ramach Programu Operacyjnego Fundusz Inicjatyw
          Obywatelskich, ponownie uruchomimy Centrum Wsparcia Organizacji
          Pozarządowych. W ramach projektu możliwe będzie skorzystanie z
          darmowego doradztwa projektowego, księgowego, prawnego,
          strategiczno-planistycznego oraz ze szkoleń z zakresu: Przetwarzania
          potrzeb społecznych na język projektów , tworzenia projektów metodą
          PCM, zarządzania zespołem, treningu asertywności, aspektów
          formalnoprawnych współpracy z wolontariuszami oraz jak skutecznie
          realizować inicjatywy lokalne. Szkolenia rozpoczną się od września br.
        </p>

        <p>
          Poza doradztwem i szkoleniami przewidziana jest organizacja Forum
          Społeczna Inicjatywa Roku 2014.
        </p>

        <p>
          Mamy nadzieję, że wzorem roku ubiegłego przedstawiciele organizacji
          pozarządowych z terenu naszej gminy wezmą aktywny udział w
          proponowanych formach wsparcia. O rozpoczęciu działań projektowych
          powiadomimy Państwa telefonicznie.
        </p>

        <p>Serdecznie zapraszamy!!!</p>
      </div>
    </div>
    <Footer />
    <ScrollUpButton />
  </Fragment>
);

export default Asos;
