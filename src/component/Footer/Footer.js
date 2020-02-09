import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';


const Footer = () => (
  <div className="container container_footer" aria-label="footer">
    <div className="row justify-content-md-center row_footer" role="row">
      <div className="col col-lg-2 row_footer_item" role="columnheader">Created by ATOM</div>
      <div className="col-md-auto row_footer_item" role="columnheader">
        <span className="copyright">Copyright &copy; Website 2020</span>
      </div>
      <div className="col col-lg-2 row_footer_item" role="columnheader">
        <Link to="/cookies" style={{ color: 'black' }}>
          Polityka prywatności
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
