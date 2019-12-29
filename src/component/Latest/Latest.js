import React, { Fragment } from "react";

import Festiwal from "../../assets/Images/festiwal.jpg";
import Senioriada from "../../assets/Images/seniorada_tn.jpg";
import Apteka from "../../assets/Images/plakat_tn.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "./Latest.css"

const Latest = () => (
  <Fragment>
    <div class="container container_Latest">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="section-heading">Zapraszamy do udziału</h1>
          <hr />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <img
          src={Festiwal}
          class="rounded mx-auto d-block img_Latest"
          alt="Festiwal Kultury i Tradycji Warmińskiej"
        />
      </div>
      <div class="col-md-4 col-sm-12">
        <img
          src={Senioriada}
          class="rounded mx-auto d-block img_Latest"
          alt="Senioriada"
        />
      </div>
      <div class="col-md-4 col-sm-12">
        <img
          src={Apteka}
          class="rounded mx-auto d-block img_Latest"
          alt="Polna apteka"
        />
      </div>
    </div>
  </Fragment>
);

export default Latest;
