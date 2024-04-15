import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Images/about/1.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import './Portfolio.css';

const Portfolio = ({fontSizeHeader, fontSizeSubtitle, fontSizeTitle}) => (
  <Fragment>
    <div style={{ textAlign: 'center', width: '100%' }} className="container container_portfolio" >
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading" style={{fontSize: `${fontSizeHeader}px`}}>Zrealizowane projekty</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-lg-4 col-sm-12">
          <div className="timeline-image">
            <img className="img-circle img-responsive img-centered img_portfolio" src={Logo} alt="Logo projektu"/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h2 className="subheading" style={{fontSize: `${fontSizeTitle}px`}}>ASOS 2014</h2>
            </div>
            <Link to="/asos" title="Link do projektu ASOS (otwiera w tym samym oknie)">
              <p className="text-muted-custom" style={{fontSize: `${fontSizeSubtitle}px`}}>Opis</p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="timeline-image">
            <img className="img-circle img-responsive img-centered img_portfolio" src={Logo} alt="Logo projektu" />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h2 className="subheading" style={{fontSize: `${fontSizeTitle}px`}}>CALL II </h2>
            </div>
            <Link to="/call" title="Link do projektu CALL (otwiera w tym samym oknie)">
              <p className="text-muted-custom" style={{fontSize: `${fontSizeSubtitle}px`}}>Opis</p>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </Fragment>
);

export default Portfolio;