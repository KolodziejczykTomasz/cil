import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/about/1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './Project.css';


const Project = ({fontSizeHeader, fontSizeSubtitle, fontSizeTitle}) => {

    return (
        <Fragment>
          <div style={{textAlign: 'center', width: '100%'}} className="container container_portfolio" >
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading" style={{fontSize: `${fontSizeHeader}rem`}}>Realizowane projekty</h1>
                <hr/>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-12">
                <div className="timeline-image">
                  <img
                      className="img-circle img-responsive img-centered img_portfolio"
                      src={Logo}
                      alt="Logo projektu"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="subheading" style={{fontSize: `${fontSizeTitle}rem`}} >RODZINA FUNDAMENTEM ŻYCIA</h2>
                  </div>
                  <Link to="/rodzina" target="_self" title="Link przenoszący na stronę projektu (zawartość otwiera się w tym samyn oknie)">
                    <p className="text-muted-custom" style={{color: '#000', fontSize: `${fontSizeSubtitle}rem`}}>
                      Opis
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="timeline-image">
                  <img
                      className="img-circle img-responsive img-centered img_portfolio"
                      src={Logo}
                      alt="Logo projektu"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="subheading" style={{fontSize: `${fontSizeTitle}rem`}} >KURS NA RODZINĘ W GMINIE KIWITY</h2>
                  </div>
                  <Link to="/kurs" target="_self" title="Link przenoszący na stronę projektu (zawartość otwiera się w tym samyn oknie)">
                    <p className="text-muted-custom" style={{color: '#000', fontSize: `${fontSizeSubtitle}rem` }}>
                      Opis
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-12">
                <div className="timeline-image">
                  <img
                      className="img-circle img-responsive img-centered img_portfolio"
                      src={Logo}
                      alt="Logo projektu"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="subheading" style={{fontSize: `${fontSizeTitle}rem`}}>SILNE I AKTYWNE RODZINY</h2>
                  </div>
                  <Link to="/silneaktywne"  target="_self" title="Link przenoszący na stronę projektu (zawartość otwiera się w tym samyn oknie)">
                    <p className="text-muted-custom" style={{color: '#000', fontSize: `${fontSizeSubtitle}rem` }}>
                      Opis
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="timeline-image">
                  <img
                      className="img-circle img-responsive img-centered img_portfolio"
                      src={Logo}
                      alt="Logo projektu"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="subheading" style={{fontSize: `${fontSizeTitle}rem`}}>RODZINA-NASZ DOM</h2>
                  </div>
                  <Link to="/naszdom" target="_self" title="Link przenoszący na stronę projektu (zawartość otwiera się w tym samyn oknie)">
                    <p className="text-muted-custom" style={{color: '#000', fontSize: `${fontSizeSubtitle}rem`}}>
                      Opis
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="timeline-image">
                  <img
                      className="img-circle img-responsive img-centered img_portfolio"
                      src={Logo}
                      alt="Logo projektu"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="subheading" style={{fontSize: `${fontSizeTitle}rem`}}>Projekt „Stoczek -nasza mała ojczyzna”</h2>
                  </div>
                  <Link to="/stoczek" target="_self" title="Link przenoszący na stronę projektu (zawartość otwiera się w tym samyn oknie)">
                    <p className="text-muted-custom" style={{color: '#000', fontSize: `${fontSizeSubtitle}rem`}}>
                      Opis
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <hr/>
          </div>
        </Fragment>
    );
  };


export default Project;


