import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/about/1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './Project.css';


class Project extends Component {
  state = {
    button: false,
    fontSizeChange: 18,
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 18,
    });
  };

  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  handleGrowFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange + number,
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
    });
  };

  render() {
    const { fontSizeChange } = this.state;
    return (
        <Fragment>
          <div style={{textAlign: 'center', width: '100%', fontSize: fontSizeChange}} className="container container_portfolio" >
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading" >Realizowane projekty</h1>
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
                    <h3 className="subheading" style={{fontSize: fontSizeChange }}>RODZINA FUNDAMENTEM ŻYCIA</h3>
                  </div>
                  <Link to="/rodzina">
                    <p className="text-muted" style={{color: '#000',fontSize: fontSizeChange }}>
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
                    <h3 className="subheading" style={{fontSize: fontSizeChange }}>KURS NA RODZINĘ W GMINIE KIWITY</h3>
                  </div>
                  <Link to="/kurs">
                    <p className="text-muted" style={{color: '#000',fontSize: fontSizeChange }}>
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
                    <h3 className="subheading" style={{fontSize: fontSizeChange }}>SILNE I AKTYWNE RODZINY</h3>
                  </div>
                  <Link to="/silneaktywne">
                    <p className="text-muted" style={{color: '#000',fontSize: fontSizeChange }}>
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
                    <h3 className="subheading">RODZINA-NASZ DOM</h3>
                  </div>
                  <Link to="/naszdom">
                    <p className="text-muted" style={{color: '#000'}}>
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
                    <h3 className="subheading">Projekt „Stoczek -nasza mała ojczyzna”</h3>
                  </div>
                  <Link to="/stoczek">
                    <p className="text-muted" style={{color: '#000'}}>
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
  }
}

export default Project;


