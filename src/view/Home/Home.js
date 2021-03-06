import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import Footer from '../../component/Footer/Footer';
import Slide from '../../component/Slide/Slide';
import Portfolio from '../../component/Portfolio/Portfolio';
import NavBar from '../../component/NavBar/NavBar';
import Latest from '../../component/Latest/Latest';
import Logotyp from '../../component/Logotyp/Logotyp';
import CookieConsent from 'react-cookie-consent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

class Home extends Component {
  state = {
    button: false,
    fontSizeChange: 14,
  };

  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

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
        <div id="wrapperHome">
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
            <div data-aos="fade-up">
              <Latest clickColorFn={this.handleClick} />
            </div>
            <div data-aos="fade-up">
              <Portfolio clickColorFn={this.handleClick} />
            </div>
            <div data-aos="fade-up">
              <Logotyp clickColorFn={this.handleClick} />
            </div>
            <div>
              <Footer clickColorFn={this.handleClick} />
            </div>

            <ScrollUpButton />
          </div>
          <CookieConsent
            location="bottom"
            buttonText="Wyrażam zgodę"
            cookieName="myAwesomeCookieName2"
            style={{ background: '#2B373B', width: '100%' }}
            buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
            expires={150}
          >
                 
            <span id="cookieSpan">
               Nasz serwis, jak większość serwisów internetowych, wykorzystuje tzw. pliki cookies.
              Korzystanie z serwisu oznacza zgodę na ich zapis lub wykorzystanie. Więcej informacji
              można znaleźć w „Polityce prywatności”. Akceptuję{' '}
              <Link to="/cookies">"Politykę prywatności"</Link> i wykorzystania plików cookies w
              serwisie.
            </span>
                
          </CookieConsent>
        </div>
      </Fragment>
    );
  }
}
export default Home;
