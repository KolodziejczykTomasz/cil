import React, { Fragment } from "react";

import LogoCil from "../../assets/Images/header-bg.jpg";

const Slide = () => (
  <Fragment>
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={LogoCil} class="d-block w-100" alt="Logo Stowarzyszenia" />
        </div>
      </div>
    </div>   
  </Fragment>
);

export default Slide;
