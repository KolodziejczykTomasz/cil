import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Images/about/1.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import './Portfolio.css';

const Portfolio = () => (
  <Fragment>
    <div
      style={{ textAlign: 'center', width: '100%' }}
      className="container container_portfolio"
      role="row"
      aria-label="Portfolio"
    >
      <div className="row" role="row">
        <div className="col-lg-12 text-center" role="columnheader">
          <h2 className="section-heading">Zrealizowane projekty</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-around" role="row">
        <div className="col-lg-4 col-sm-12">
          <div className="timeline-image">
            <img
              className="img-circle img-responsive img-centered img_portfolio"
              src={Logo}
              alt="Logo projektu"
              role="presentation"
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading" role="columnheader">
              <h3 className="subheading">ASOS 2014</h3>
            </div>
            <Link to="/asos">
              <p className="text-muted" style={{ color: '#595959' }}>
                Opis
              </p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="timeline-image">
            <img
              className="img-circle img-responsive img-centered img_portfolio"
              src={Logo}
              alt="Logo projektu"
              role="presentation"
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading" role="columnheader">
              <h3 className="subheading">CALL II </h3>
            </div>
            <Link to="/call">
              <p className="text-muted" style={{ color: '#595959' }}>
                Opis
              </p>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </Fragment>
);

export default Portfolio;
