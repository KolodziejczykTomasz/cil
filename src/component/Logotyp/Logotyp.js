import React, { Fragment } from 'react';

import LogoCal from '../../assets/Images/logos/cal.jpg';
import LogoFio from '../../assets/Images/logos/fio.jpg';
import LogoKapital from '../../assets/Images/logos/kapital.jpg';
import LogoUe from '../../assets/Images/logos/ue.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import './Logotyp.css';

const Logotyp = () => (
  <Fragment>
    <div className="container container_logotyp" role="row" aria-label="Logotypy" style={{width: '100%'}}>
      <div className="row" role="row">
        <div className="col-md-3 col-sm-6" role="columnheader">
          <img
            src={LogoCal}
            title="Centrum Aktywności Lokalnej"
            className="img-responsive img-centered img_Logotyp"
            alt="Logo Centrum Aktywności Lokalnej"
            role="presentation"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            src={LogoFio}
            title="Fundusz Inicjatyw Obywatelskich"
            className="img-responsive img-centered img_Logotyp"
            alt="Logo Funduszu Inicjatyw Obywatelskich"
            role="presentation"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            src={LogoKapital}
            title="Kapital Ludzki"
            className="img-responsive img-centered img_Logotyp"
            alt="Logo kapital Ludzki"
            role="presentation"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            src={LogoUe}
            title="Unia europejska"
            className="img-responsive img-centered img_Logotyp"
            alt="Logo unii europejskiej"
            role="presentation"
          />
        </div>
      </div>
      <hr />
    </div>
  </Fragment>
);

export default Logotyp;
