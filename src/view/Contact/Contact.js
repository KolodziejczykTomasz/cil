import React, { Fragment, Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Form, FormGroup, Input } from 'reactstrap';
import NavBar from '../../component/NavBar/NavBar';
import Footer from '../../component/Footer/Footer';

import './Contact.css';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
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

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL_ID>',
      subject: name,
      message_html: message,
    };
    emailjs.send(
      'gmail',
      'template_61b8BXPo',
      templateParams,
      'user_BGR0WgffXBmLHIpGi5Te8',
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    const { fontSizeChange } = this.state;
    return (
      <Fragment>
        <div className={this.state.button ? 'buttonTrue' : 'buttonFalse'}>
          <NavBar clickColorFn={this.handleClick} growFontFn={this.handleGrowFontSize} shrinkFontFn={this.handleShrinkFontSize} resetFontFn={this.handleResetFontSize} />
          <div className="container container_form" style={{ marginTop: 100, fontSize: fontSizeChange }}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading">Napisz do nas</h1>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12" style={{ marginTop: 30 }}>
                <FormGroup controlId="formBasicName">
                  <label htmlFor="name">Imię - wymagane</label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    className="text-primary"
                    required
                    data-validation-required-message="Podaj imię."
                    onChange={this.handleChange.bind(this, 'name')}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                  <label htmlFor="phone">Numer telefonu - wymagane</label>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    className="text-primary"
                    value={this.state.phone}
                    onChange={this.handleChange.bind(this, 'phone')}
                    required
                    data-validation-required-message="Podaj numer telefonu."
                  />
                </FormGroup>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                  <FormGroup controlId="formBasicEmail">
                    <label htmlFor="email">Email - wymagane</label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      className="text-primary"
                      onChange={this.handleChange.bind(this, 'email')}
                      required
                      data-validation-required-message="Podaj adres e-mail"
                    />
                  </FormGroup>

                  <FormGroup controlId="formBasicMessage">
                    <label htmlFor="message">Treść wiadomości - wymagane</label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      className="text-primary"
                      value={this.state.message}
                      required
                      data-validation-required-message="Treść wiadomości."
                      onChange={this.handleChange.bind(this, 'message')}
                    />
                  </FormGroup>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success" />
                    <button
                      aria-label="Wyślij"
                      type="submit"
                      className="btn btn-lg btn-outline-primary"
                      style={{ marginTop: 20, color: 'black' }}
                    >
                      Wyślij
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}


export default Contact;
