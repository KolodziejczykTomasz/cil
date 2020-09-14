import React, { Fragment, Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import Footer from '../../component/Footer/Footer';
import Slide from '../../component/Slide/Slide';
import Portfolio from '../../component/Portfolio/Portfolio';
import NavBar from '../../component/NavBar/NavBar';
import Latest from '../../component/Latest/Latest';
import Logotyp from '../../component/Logotyp/Logotyp';

import './Home.css';

class Home extends Component {
  state = {
    button: false,
    fontSizeChange: 14,
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 14,  
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
        <div
          className={this.state.button ? 'buttonTrue' : 'buttonFalse'}
          style={{ fontSize: fontSizeChange }}
        >
          <NavBar
            clickColorFn={this.handleClick}
            growFontFn={this.handleGrowFontSize}
            shrinkFontFn={this.handleShrinkFontSize}
            resetFontFn={this.handleResetFontSize}
          />
          <Slide />
          <Latest clickColorFn={this.handleClick} />
          <Portfolio clickColorFn={this.handleClick} />
          <Logotyp clickColorFn={this.handleClick} />
          <Footer clickColorFn={this.handleClick} />
          <ScrollUpButton />
        </div>
      </Fragment>
    );
  }
}
export default Home;
