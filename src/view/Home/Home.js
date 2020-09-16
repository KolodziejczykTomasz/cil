import React, { Fragment, Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import Footer from '../../component/Footer/Footer';
import Slide from '../../component/Slide/Slide';
import Portfolio from '../../component/Portfolio/Portfolio';
import NavBar from '../../component/NavBar/NavBar';
import Latest from '../../component/Latest/Latest';
import Logotyp from '../../component/Logotyp/Logotyp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';


class Home extends Component {
  state = {
    button: false,
    fontSizeChange: 14,
  };

  componentDidMount(){
    AOS.init({
      duration: 1000
    })
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
          <div data-aos="fade-up"><Latest clickColorFn={this.handleClick} /></div>
          <div data-aos="fade-up"><Portfolio clickColorFn={this.handleClick} /></div>
          <div data-aos="fade-up"><Logotyp clickColorFn={this.handleClick} /></div>
          <div data-aos="fade-up"><Footer clickColorFn={this.handleClick} /></div>
          
          
          
          
          <ScrollUpButton />
        </div>
      </Fragment>
    );
  }
}
export default Home;
