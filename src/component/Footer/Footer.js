import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <span class="copyright">Copyright &copy; Website 2020</span>
      </div>
      <div class="col-md-4">
        <ul class="list-inline quicklinks">
          <li>
            <Link to="/cookies" style={{color: "#6e5500"}}>
              Polityka prywatności
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
