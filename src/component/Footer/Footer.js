import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => (
  <div className="container container_footer" aria-label="footer" style={{ width: '100%' }}>
    <div className="row justify-content-md-center row_footer" role="row">
      <div className="col col-lg-3 row_footer_item" role="columnheader">
        <Link to="/wcag" style={{ color: 'black' }}>
          Oświadczenie o dostępności
        </Link>
      </div>
      <div className="col col-lg-3 row_footer_item" role="columnheader">
        <Link to="/cookies" style={{ color: 'black' }}>
          Polityka prywatności
        </Link>
      </div>
      <div className="col-md-auto row_footer_item" role="columnheader">
        <span className="copyright">&copy; cilprzestrzen</span>
      </div>
      <div className="col col-lg-3 row_footer_item" role="columnheader">
        Created by <a href="https://nettom24.com/" target='_blank'>NETTOM24</a>  
      </div>
    </div>
  </div>
);

export default Footer;
