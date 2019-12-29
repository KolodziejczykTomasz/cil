import React, { Fragment } from "react";

import LogoCal from "../../assets/Images/logos/cal.jpg";
import LogoFio from "../../assets/Images/logos/fio.jpg";
import LogoKapital from "../../assets/Images/logos/kapital.jpg";
import LogoUe from "../../assets/Images/logos/ue.jpg";

import "bootstrap/dist/css/bootstrap.css";

const Logotyp = () => (
  <Fragment>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <img
            src={LogoCal}
            class="img-responsive img-centered"
            alt="Logo cal"
          />
        </div>
        <div class="col-md-3 col-sm-6">
          <img
            src={LogoFio}
            class="img-responsive img-centered"
            alt="Logo fio"
          />
        </div>
        <div class="col-md-3 col-sm-6">
          <img
            src={LogoKapital}
            class="img-responsive img-centered"
            alt="Logo kapital Ludzki"
          />
        </div>
        <div class="col-md-3 col-sm-6">
          <img
            src={LogoUe}
            class="img-responsive img-centered"
            alt="Logo unii europejskiej"
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Logotyp;
