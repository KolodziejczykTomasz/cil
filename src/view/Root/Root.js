import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from '../Home/Home';
import Asos from '../Asos/Asos';
import Call from '../Call/Call';
import Cookies from '../Cookies/Cookies';
import Statut from '../Statut/Statut';
import About from '../About/About';
import News from '../News/News';
import Kontakt from '../Contact/Contact';

import './Root.css';

class Root extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/call" component={Call} />
            <Route path="/asos" component={Asos} />
            <Route path="/statut" component={Statut} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/cookies" component={Cookies} />
            <Route path="/contact" component={Kontakt} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
