import React, { Fragment, Component } from "react";
import Footer from "../../component/Footer/Footer";
import Slide from "../../component/Slide/Slide";
import Portfolio from "../../component/Portfolio/Portfolio";
import NavBar from "../../component/NavBar/NavBar";
import Latest from "../../component/Latest/Latest";
import Logotyp from "../../component/Logotyp/Logotyp";
import ScrollUpButton from "react-scroll-up-button";


import "./Home.css";


class Home extends Component {
  render() {
    return (
      <Fragment>        
        <NavBar />
        <Slide /> 
        <Latest />
        <Portfolio />
        <Logotyp />
        <Footer />
        <ScrollUpButton />
      </Fragment>
    );
  }
}

export default Home;
