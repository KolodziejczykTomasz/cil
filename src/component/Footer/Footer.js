import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = ({fontSizeSubtitle}) => (
  <div className="container container_footer" style={{ width: '100%', fontSize: `${fontSizeSubtitle}px`}}>
    <div className="row justify-content-md-center row_footer" >
      <div className="col col-lg-3 row_footer_item">
        <Link to="/wcag" target='_self' role="link" style={{ fontSize: `${fontSizeSubtitle}px`}}  title="Link przenoszący do strony dotyczącej dostępności (strona otwiera się w tym samym oknie)">
          Oświadczenie o dostępności
        </Link>
      </div>
      <div className="col col-lg-3 row_footer_item">
        <Link to="/cookies" target='_self' role="link" style={{ fontSize: `${fontSizeSubtitle}px`}} title="Link przenoszący na stronę polityki prywatności (strona otwiera się w tym samym oknie)">
          Polityka prywatności
        </Link>
      </div>
      <div className="col-md-auto row_footer_item">
        <span className="copyright" style={{marginRight: '20px', fontSize: `${fontSizeSubtitle}px`}}>&copy; cilprzestrzen</span>
        <a target="_blank" href="https://achecks.org/achecker#wcag21aa-desktop,https://cilprzestrzen.eu/" title="Link do strony sprawdzającej poprawność strony z WCAG (strona otwiera się w nowym oknie)"><img
            src="https://achecks.org/images/icon_W21_aa.png" alt="AChecker accessibility checker: WCAG 2.1 (Level AA)"
            height="32" width="88"/></a>
      </div>
      <div className="col col-lg-3 row_footer_item">
        Created by <a href="https://nettom24.com/" target='_self' role="link" title="Link przenoszący do strony firmy wykonującej stronę (strona otwiera się w tym samym oknie)">NETTOM24</a>

      </div>
    </div>
  </div>
);

export default Footer;
