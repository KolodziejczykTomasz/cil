import React, { Fragment, Component } from 'react';
import Footer from '../../component/Footer/Footer';
import Project from '../../component/Project/Project';
import NavBar from '../../component/NavBar/NavBar';
import AOS from 'aos';



class ChooseProject extends Component {
  state = {
    button: false,
    fontSizeSubtitle: 1.6,
    fontSizeTitle: 2.4,
    fontSizeHeader: 3.6
  };

  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  handleResetFontSize = () => {
    this.setState({
      fontSizeSubtitle: 1.6,
      fontSizeChange: 1.8,
      fontSizeTitle: 2.4,
      fontSizeHeader: 3.6
    });
  };

  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  handleGrowFontSize = () => {
    const number = .1;
    this.setState({
      fontSizeSubtitle: this.state.fontSizeSubtitle + number,
      fontSizeHeader: this.state.fontSizeHeader + number,
      fontSizeTitle: this.state.fontSizeTitle + number
    });
  };

  handleShrinkFontSize = () => {
    const number = .1;
    this.setState({
      fontSizeSubtitle: this.state.fontSizeSubtitle - number,
      fontSizeHeader: this.state.fontSizeHeader - number,
      fontSizeTitle: this.state.fontSizeTitle - number
    });
  };

  render() {


    return (
      <Fragment>
        <div className={this.state.button ? 'buttonTrue' : 'buttonFalse'}>
          <NavBar
            clickColorFn={this.handleClick}
            growFontFn={this.handleGrowFontSize}
            shrinkFontFn={this.handleShrinkFontSize}
            resetFontFn={this.handleResetFontSize}
          />
          <Project
              fontSizeHeader={this.state.fontSizeHeader}
              fontSizeTitle={this.state.fontSizeTitle}
              fontSizeSubtitle={this.state.fontSizeSubtitle}
          />
        <Footer/>
        </div>
      </Fragment>
    );
  }
}
export default ChooseProject;
