import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";


const Footer = () => (
  <div class="container container_footer">
    <div class="row justify-content-md-center row_footer">
      <div class="col col-lg-2 row_footer_item">Created by ATOM</div>
      <div class="col-md-auto row_footer_item">
        <span class="copyright">Copyright &copy; Website 2020</span>
      </div>
      <div class="col col-lg-2 row_footer_item">
        <Link to="/cookies" style={{ color: "#6e5500" }}>
          Polityka prywatności
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
