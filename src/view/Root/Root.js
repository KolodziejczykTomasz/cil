import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "../Home/Home";
import Asos from "../Asos/Asos";
import Call from "../Call/Call";
import Cookies from "../Cookies/Cookies";
import Statut from "../Statut/Statut";
import About from "../About/About";
import News from "../News/News";
import Kontakt from "../Contact/Contact";
import AppContext from "../../context";


class Root extends Component {
  state = {
    fontSize: 12,
    backgroundColor: false,
    color: "black"
  };

  hendleClickSmallFont = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
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
              <Route path="/contact" component={Kontakt} />
            </Switch>
          </AppContext.Provider>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Root;
