import React, { Fragment } from "react";

import Festiwal from "../../assets/Images/festiwal.jpg";
import Senioriada from "../../assets/Images/seniorada_tn.jpg";
import Apteka from "../../assets/Images/plakat_tn.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "./Latest.css"

const Latest = () => (
  <Fragment>
    <div class="container container_Latest" role="row" aria-label="Ostatnie projekty">
      <div class="row" role="row">
        <div class="col-lg-12 text-center" role="columnheader">
          <h1 class="section-heading" >Zapraszamy do udziału</h1>
          <hr />
        </div>
      </div>
    </div>
    <div class="row" role="columnheader">
      <div class="col-md-4 col-sm-12" >
        <img
          src={Festiwal}
          class="rounded mx-auto d-block img_Latest"
          alt="Festiwal Kultury i Tradycji Warmińskiej"
          role="presentation"
        />
      </div>
      <div class="col-md-4 col-sm-12">
        <img
          src={Senioriada}
          class="rounded mx-auto d-block img_Latest"
          alt="Senioriada"
          role="presentation"
        />
      </div>
      <div class="col-md-4 col-sm-12">
        <img
          src={Apteka}
          class="rounded mx-auto d-block img_Latest"
          alt="Polna apteka"
          role="presentation"
        />
      </div>
    </div>
  </Fragment>
);

export default Latest;
