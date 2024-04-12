import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => (
  <div className="container container_footer" style={{ width: '100%' }}>
    <div className="row justify-content-md-center row_footer">
      <div className="col col-lg-3 row_footer_item">
        <Link to="/wcag" target='_self' title="Link przenoszący do strony dotyczącej dostępności">
          Oświadczenie o dostępności
        </Link>
      </div>
      <div className="col col-lg-3 row_footer_item">
        <Link to="/cookies" target='_self' title="Link przenoszący na stronę polityki prywatności">
          Polityka prywatności
        </Link>
      </div>
      <div className="col-md-auto row_footer_item">
        <span className="copyright" style={{marginRight: '20px'}}>&copy; cilprzestrzen</span>
        <a target="_blank" href="https://achecks.org/achecker#wcag21aa-desktop,https://cilprzestrzen.eu/"><img
            src="https://achecks.org/images/icon_W21_aa.png" alt="AChecker accessibility checker: WCAG 2.1 (Level AA)"
            height="32" width="88"/></a>
      </div>
      <div className="col col-lg-3 row_footer_item">
        Created by <a href="https://nettom24.com/" target='_self'
                      title="Link przenoszący do strony firmy wykonującej stronę">NETTOM24</a>

      </div>
    </div>
  </div>
);

export default Footer;
