import React, { Fragment } from "react";

import LogoCil from "../../assets/Images/header-bg.jpg";

const Slide = () => (
  <Fragment>
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
      role="row"      
    >
      <div class="carousel-inner">
        <div class="carousel-item active" role="columnheader">
          <img src={LogoCil} class="d-block w-100" alt="Logo Stowarzyszenia" role="presentation" title="Logo Stowarzyszenia CIL"/>
        </div>
      </div>
    </div>   
  </Fragment>
);

export default Slide;
