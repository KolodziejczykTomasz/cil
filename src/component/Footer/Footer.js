import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";


const Footer = () => (
  <div class="container container_footer" aria-label="footer">
    <div class="row justify-content-md-center row_footer" role="row">
      <div class="col col-lg-2 row_footer_item" role="columnheader" >Created by ATOM</div>
      <div class="col-md-auto row_footer_item" role="columnheader">
        <span class="copyright">Copyright &copy; Website 2020</span>
      </div>
      <div class="col col-lg-2 row_footer_item" role="columnheader">
        <Link to="/cookies" style={{ color: "black" }}>
          Polityka prywatności
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
