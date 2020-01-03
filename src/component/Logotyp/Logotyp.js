import React, { Fragment } from "react";

import LogoCal from "../../assets/Images/logos/cal.jpg";
import LogoFio from "../../assets/Images/logos/fio.jpg";
import LogoKapital from "../../assets/Images/logos/kapital.jpg";
import LogoUe from "../../assets/Images/logos/ue.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "./Logotyp.css"

const Logotyp = () => (
  <Fragment>
    <div class="container container_logotyp" role="row" aria-label="Logotypy">
      <div class="row" role="row">
        <div class="col-md-3 col-sm-6" role="columnheader">
          <img
            src={LogoCal}
            title="Centrum Aktywności Lokalnej"
            class="img-responsive img-centered img_Logotyp"
            alt="Logo Centrum Aktywności Lokalnej"
            role="presentation"
          />
        </div>
        <div class="col-md-3 col-sm-6" >
          <img
            src={LogoFio}
            title="Fundusz Inicjatyw Obywatelskich"
            class="img-responsive img-centered img_Logotyp"
            alt="Logo Funduszu Inicjatyw Obywatelskich"
            role="presentation"
          />
        </div>
        <div class="col-md-3 col-sm-6" >
          <img
            src={LogoKapital}
            title="Kapital Ludzki"
            class="img-responsive img-centered img_Logotyp"
            alt="Logo kapital Ludzki"
            role="presentation"
          />
        </div>
        <div class="col-md-3 col-sm-6" >
          <img
            src={LogoUe}
            title="Unia europejska"
            class="img-responsive img-centered img_Logotyp"
            alt="Logo unii europejskiej"
            role="presentation"
          />
        </div>
      </div>
      <hr/>
    </div>
  </Fragment>
);

export default Logotyp;
