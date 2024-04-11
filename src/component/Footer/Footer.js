import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => (
  <div className="container container_footer" aria-label="footer" style={{ width: '100%' }}>
    <div className="row justify-content-md-center row_footer">
      <div className="col col-lg-3 row_footer_item">
        <Link to="/wcag" target='_self'>
          Oświadczenie o dostępności
        </Link>
      </div>
      <div className="col col-lg-3 row_footer_item">
        <Link to="/cookies" target='_self'>
          Polityka prywatności
        </Link>
      </div>
      <div className="col-md-auto row_footer_item">
        <span className="copyright">&copy; cilprzestrzen</span>
      </div>
      <div className="col col-lg-3 row_footer_item" >
        Created by <a href="https://nettom24.com/" target='_self'>NETTOM24</a>
      </div>
    </div>
  </div>
);

export default Footer;
