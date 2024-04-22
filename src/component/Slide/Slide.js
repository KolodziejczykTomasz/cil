import React, { Fragment } from 'react';

import LogoCil from '../../assets/Images/header-bg.jpg';

const Slide = () => (
  <Fragment>
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
      style={{width: '100%'}}
    >
      <div className="carousel-inner" >
        <div className="carousel-item active" >
          <img src={LogoCil} className="d-block w-100" alt="Logo Stowarzyszenia" title="Logo Stowarzyszenia"/>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Slide;