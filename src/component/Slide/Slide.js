import React, { Fragment } from 'react';

import LogoCil from '../../assets/Images/header-bg.jpg';

const Slide = () => (
  <Fragment>
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
      role="row"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" role="columnheader">
          <img src={LogoCil} className="d-block w-100" alt="Logo Stowarzyszenia" role="presentation" title="Logo Stowarzyszenia CIL" />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Slide;