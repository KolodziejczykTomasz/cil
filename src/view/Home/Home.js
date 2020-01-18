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
  state = {
    button: true
  }
    
handleClick=()=>{
  this.setState({
    button: !this.state.button
  })
}

  render() {
    return (
      <Fragment>     
        <div className={this.state.button ? "buttonTrue" : "buttonFalse"} >
          <NavBar clickColorFn={this.handleClick}/>
        <Slide />
          <Latest clickColorFn={this.handleClick}/>
          <Portfolio clickColorFn={this.handleClick}/>
          <Logotyp clickColorFn={this.handleClick}/>
          <Footer clickColorFn={this.handleClick}/>
        <ScrollUpButton /></div>
      </Fragment>
    );
  }
}

export default Home;
