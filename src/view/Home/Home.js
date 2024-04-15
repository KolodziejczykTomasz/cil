import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
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
    fontSizeSubtitle: 16,
    fontSizeTitle: 24,
    fontSizeHeader: 36
  };

  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  handleResetFontSize = () => {
    this.setState({
      fontSizeSubtitle: 16,
      fontSizeChange: 18,
      fontSizeTitle: 24,
      fontSizeHeader: 36
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
      fontSizeSubtitle: this.state.fontSizeSubtitle + number,
      fontSizeHeader: this.state.fontSizeHeader + number,
      fontSizeTitle: this.state.fontSizeTitle + number
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeSubtitle: this.state.fontSizeSubtitle - number,
      fontSizeHeader: this.state.fontSizeHeader - number,
      fontSizeTitle: this.state.fontSizeTitle - number
    });
  };

  render() {
    const { fontSizeSubtitle } = this.state;
    const { fontSizeHeader} = this.state;

    return (
      <Fragment>
        <div id="wrapperHome">
          <div
            className={this.state.button ? 'buttonTrue' : 'buttonFalse'}
            style={{ fontSize: fontSizeSubtitle }}
          >
            <NavBar
              clickColorFn={this.handleClick}
              growFontFn={this.handleGrowFontSize}
              shrinkFontFn={this.handleShrinkFontSize}
              resetFontFn={this.handleResetFontSize}
            />
            <Slide />
            <div data-aos="fade-up">
              <Latest fontSizeHeader={this.state.fontSizeHeader} />
            </div>
            <div data-aos="fade-up">
              <Portfolio
                  fontSizeHeader={this.state.fontSizeHeader}
                  fontSizeTitle={this.state.fontSizeTitle}
                  fontSizeSubtitle={this.state.fontSizeSubtitle} />
            </div>
            <div data-aos="fade-up">
              <Logotyp  clickColorFn={this.handleClick}
                        growFontFn={this.handleGrowFontSize}
                        shrinkFontFn={this.handleShrinkFontSize}
                        resetFontFn={this.handleResetFontSize} />
            </div>
            <div>
              <Footer  clickColorFn={this.handleClick}
                       growFontFn={this.handleGrowFontSize}
                       shrinkFontFn={this.handleShrinkFontSize}
                       resetFontFn={this.handleResetFontSize} />
            </div>
          </div>
          <CookieConsent
            location="bottom"
            buttonText="Wyrażam zgodę"
            cookieName="myAwesomeCookieName2"
            style={{ background: '#000', width: '100%' }}
            buttonStyle={{ color: '#fff', fontSize: fontSizeHeader }}
            expires={150}
          >
                 
            <span id="cookieSpan" style={{ fontSize: fontSizeHeader }}>
              Nasz serwis, jak większość serwisów internetowych, wykorzystuje tzw. pliki cookies.
              Korzystanie z serwisu oznacza zgodę na ich zapis lub wykorzystanie. Więcej informacji
              można znaleźć w „Polityce prywatności”. Akceptuję
              <Link to="/cookies" className="linkToCookies" title="Link przenoszący na stronę polityki prywatności">"Politykę prywatności"</Link> i wykorzystania plików cookies w
              serwisie.
            </span>
                
          </CookieConsent>
        </div>
      </Fragment>
    );
  }
}
export default Home;
