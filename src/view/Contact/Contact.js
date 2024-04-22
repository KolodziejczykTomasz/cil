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
    fontSizeChange: 16,
    fontSizeHeader: 36
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 16,
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
      fontSizeChange: this.state.fontSizeChange + number,
      fontSizeHeader: this.state.fontSizeHeader + number,
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
      fontSizeHeader: this.state.fontSizeHeader - number,
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
    const { fontSizeChange, fontSizeHeader } = this.state;
    return (
      <Fragment>
        <div className={this.state.button ? 'buttonTrue' : 'buttonFalse'} style={{fontSize: fontSizeChange }}>
          <NavBar clickColorFn={this.handleClick} growFontFn={this.handleGrowFontSize} shrinkFontFn={this.handleShrinkFontSize} resetFontFn={this.handleResetFontSize} />
          <div className="container container_form" style={{ marginTop: 100, fontSize: fontSizeChange }}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading" style={{fontSize: fontSizeHeader}}>Napisz do nas</h1>
                <hr />
              </div>
            </div>
            <div className="row">
              <form className="col-lg-12" style={{ marginTop: 30 }} autoComplete="on" role="form">
                <FormGroup controlId="formBasicName">
                  <label htmlFor="name"></label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    className="text-primary"
                    required
                    placeholder='Imię'
                    data-validation-required-message="Podaj imię."
                    onChange={this.handleChange.bind(this, 'name')}
                    style={{ fontSize: fontSizeChange }}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                  <label htmlFor="phone"></label>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    className="text-primary"
                    value={this.state.phone}
                    onChange={this.handleChange.bind(this, 'phone')}
                    required
                    placeholder='Numer telefonu'
                    data-validation-required-message="Podaj numer telefonu." 
                    style={{ fontSize: fontSizeChange }}
                  />
                </FormGroup>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                  <FormGroup controlId="formBasicEmail">
                    <label htmlFor="email"></label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      className="text-primary"
                      onChange={this.handleChange.bind(this, 'email')}
                      required
                      placeholder='Email'
                      data-validation-required-message="Podaj adres e-mail" 
                      style={{ fontSize: fontSizeChange }}
                    />
                  </FormGroup>

                  <FormGroup controlId="formBasicMessage">
                    <label htmlFor="message"></label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      className="text-primary"
                      value={this.state.message}
                      required
                      placeholder='Treść wiadomości'
                      data-validation-required-message="Treść wiadomości."
                      onChange={this.handleChange.bind(this, 'message')}
                      style={{ fontSize: fontSizeChange }}
                    />
                  </FormGroup>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success"/>
                    <input aria-label="Wyślij" type="submit" className="btn btn-outline-success"  style={{ fontSize: fontSizeChange }}/>                
                  </div>
                </Form>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}


export default Contact;
