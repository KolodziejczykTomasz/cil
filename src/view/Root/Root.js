import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Home/Home';
import Asos from '../Asos/Asos';
import Call from '../Call/Call';
import Cookies from '../Cookies/Cookies';
import Wcag from '../Wcag/Wcag';
import Statut from '../Statut/Statut';
import About from '../About/About';
import News from '../News/News';
import Kontakt from '../Contact/Contact';
import Kurs from '../Projekty/Kurs/Kurs';
import NaszDom from '../Projekty/NaszDom/NaszDom';
import Rodzina from '../Projekty/Rodzina/Rodzina';
import ChooseProject from '../Projekty/ChooseProject';
import SilneAktywne from '../Projekty/SilneAktywne/SilneAktywne';
import Partners from '../partners/partners';
import Stoczek from '../Projekty/Stoczek/Stoczek';


import AppContext from '../../context';

class Root extends Component {
  state = {
    fontSize: 14,
    backgroundColor: false,
    color: 'black',
  };

  hendleClickSmallFont = () => {
    this.setState({
      fontSize: this.state.fontSize + 2,
    });
  };

  render() {
    // const { fontSize, backgroundColor, color } = this.state;
    const contextElements = { ...this.state };
    return (
      <Fragment>
        <BrowserRouter>
          <AppContext.Provider value={contextElements}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/call" component={Call} />
              <Route path="/asos" component={Asos} />
              <Route path="/statut" component={Statut} />
              <Route path="/about" component={About} />
              <Route path="/news" component={News} />
              <Route path="/cookies" component={Cookies} />
              <Route path="/wcag" component={Wcag} />
              <Route path="/contact" component={Kontakt} />
              <Route path="/projekty" component={ChooseProject} />
              <Route path="/kurs" component={Kurs} />
              <Route path="/rodzina" component={Rodzina} />
              <Route path="/naszdom" component={NaszDom} />
              <Route path="/silneaktywne" component={SilneAktywne} />
              <Route path="/partners" component={Partners} />
              <Route path="/stoczek" component={Stoczek} />
            </Switch>
          </AppContext.Provider>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Root;
