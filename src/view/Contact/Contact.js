import React, { Fragment } from "react";
import NavBar from "../../component/NavBar/NavBar";


const Contact = () => (
  <Fragment>
    <NavBar/>   
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Napisz do nas</h2>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name">Imię - wymagane</label>
                  <input
                    type="text"
                    class="form-control"
                    name="Imię"
                    id="name"
                    required
                    data-validation-required-message="Podaj imię."
                  />
                  <p class="help-block text-danger"></p>
                </div>

                <div class="form-group">
                  <label for="email">Email - wymagane</label>
                  <input
                    type="email"
                    class="form-control"
                    name="Adres Email"
                    id="email"
                    required
                    data-validation-required-message="Podaj adres e-mail"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <label for="phone">Numer telefonu - wymagane</label>
                  <input
                    type="tel"
                    class="form-control"
                    name="Numer telefonu"
                    id="phone"
                    required
                    data-validation-required-message="Podaj numer telefonu."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="message">Treść wiadomości - wymagane</label>
                  <textarea
                    class="form-control"
                    name="Treść wiadomości"
                    id="message"
                    required
                    data-validation-required-message="Treść wiadomości."
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button
                  type="submit"
                  class="btn btn-xl"
                  style={{ background: "#6e5500" }}
                >
                  Wyślij
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  </Fragment>
);

export default Contact;