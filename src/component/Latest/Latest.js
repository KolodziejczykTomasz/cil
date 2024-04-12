import React, { Fragment } from 'react';

import Festiwal from '../../assets/Images/festiwal.jpg';
import Senioriada from '../../assets/Images/seniorada_tn.jpg';
import Apteka from '../../assets/Images/plakat_tn.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import './Latest.css';

const Latest = () => (
  <Fragment>
    <div className="container container_Latest" style={{width: '100%'}}>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading">Zapraszamy do udziału</h1>
          <hr />
        </div>
      </div>
    </div>
    <div className="row" >
      <div className="col-md-4 col-sm-12">
        <img
          src={Festiwal}
          className="rounded mx-auto d-block img_Latest"
          alt="Plakat projektu Festiwal Kultury i Tradycji Warmińskiej"
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <img
          src={Senioriada}
          className="rounded mx-auto d-block img_Latest"
          alt="Plakat projektu Senioriada"
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <img
          src={Apteka}
          className="rounded mx-auto d-block img_Latest"
          alt="Plakat projektu Polna apteka"
        />
      </div>
    </div>
  </Fragment>
);

export default Latest;
