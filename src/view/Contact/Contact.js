import React, { Fragment, Component } from "react";
import * as emailjs from "emailjs-com";
import NavBar from "../../component/NavBar/NavBar";
import {Form, FormGroup, Input } from "reactstrap";
import Footer from "../../component/Footer/Footer";

import "./Contact.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    button: false,
    fontSizeChange: 14
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 14
    });
  };


  handleClick = () => {
    this.setState({
      button: !this.state.button
    });
  };

  handleGrowFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange + number
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "<YOUR_EMAIL_ID>",
      subject: name,
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_61b8BXPo",
      templateParams,
      "user_BGR0WgffXBmLHIpGi5Te8"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    const { fontSizeChange } = this.state;
    return (
      <Fragment>
        <div className={this.state.button ? "buttonTrue" : "buttonFalse"}>
          <NavBar clickColorFn={this.handleClick} growFontFn={this.handleGrowFontSize} shrinkFontFn={this.handleShrinkFontSize} resetFontFn={this.handleResetFontSize}/>
          <div class="container container_form" style={{ marginTop: 100, fontSize: fontSizeChange  }}>
          <div class="row" role="row">
            <div class="col-lg-12 text-center" role="columnheader">
              <h1 class="section-heading">Napisz do nas</h1>
              <hr />
            </div>
          </div>
          <div class="row" role="row">
            <div class="col-lg-12" style={{ marginTop: 30 }}>
              <FormGroup controlId="formBasicName">
                <label for="name">Imię - wymagane</label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  className="text-primary"
                  required
                  data-validation-required-message="Podaj imię."
                  onChange={this.handleChange.bind(this, "name")}
                />
              </FormGroup>
              <FormGroup controlId="formBasicSubject">
                <label for="phone">Numer telefonu - wymagane</label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  className="text-primary"
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this, "phone")}
                  required
                  data-validation-required-message="Podaj numer telefonu."
                />
              </FormGroup>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicEmail">
                  <label for="email">Email - wymagane</label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, "email")}
                    required
                    data-validation-required-message="Podaj adres e-mail"
                  />
                </FormGroup>

                <FormGroup controlId="formBasicMessage">
                  <label for="message">Treść wiadomości - wymagane</label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    className="text-primary"
                    value={this.state.message}
                    required
                    data-validation-required-message="Treść wiadomości."
                    onChange={this.handleChange.bind(this, "message")}
                  />
                </FormGroup>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    aria-label="Wyślij"
                    type="submit"
                    class="btn btn-lg btn-outline-primary"
                    style={{ marginTop: 20, color: "black" }}
                  >
                    Wyślij
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <Footer /></div>
      </Fragment>
    );
  }
}



export default Contact;
