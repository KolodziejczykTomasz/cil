import React, { Fragment } from 'react';

import LogoCal from '../../assets/Images/logos/cal.jpg';
import LogoFio from '../../assets/Images/logos/fio.jpg';
import LogoKapital from '../../assets/Images/logos/kapital.jpg';
import LogoUe from '../../assets/Images/logos/ue.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import './Logotyp.css';

const Logotyp = () => (
  <Fragment>
    <div className="container container_logotyp" style={{width: '100%'}}>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <img
            src={LogoCal}
            className="img-responsive img-centered img_Logotyp"
            alt="Logo Centrum Aktywności Lokalnej"
            title="Logo Centrum Aktywności Lokalnej"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            src={LogoFio}
            className="img-responsive img-centered img_Logotyp"
            alt="Logo Funduszu Inicjatyw Obywatelskich"
            title="Logo Funduszu Inicjatyw Obywatelskich"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            src={LogoKapital}
            className="img-responsive img-centered img_Logotyp"
            alt="Logo kapital Ludzki"
            title="Logo kapital Ludzki"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            src={LogoUe}
            className="img-responsive img-centered img_Logotyp"
            alt="Logo unii europejskiej"
            title="Logo unii europejskiej"
          />
        </div>
      </div>
      <hr />
    </div>
  </Fragment>
);

export default Logotyp;
