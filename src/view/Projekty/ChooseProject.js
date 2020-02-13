import React, { Fragment, Component } from 'react';
import Footer from '../../component/Footer/Footer';
import Project from '../../component/Project/Project';
import NavBar from '../../component/NavBar/NavBar';



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
        
          <Project clickColorFn={this.handleClick} />
        <Footer/>
     
        </div>
      </Fragment>
    );
  }
}
export default Home;
