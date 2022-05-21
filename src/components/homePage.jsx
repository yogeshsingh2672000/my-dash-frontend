import React, { Component } from "react";
import Background from "./background.png";
import "./homePage.scss";

class Home extends Component {
  // state = {  }
  render() {
    const checkpass = () => {
      let pass = document.getElementById("pass").value;
      let confirm_pass = document.getElementById("confirm_pass").value;
      if (pass !== confirm_pass) {
        alert("Password did not match");
      } else if (pass.length == 0 && confirm_pass.length == 0) {
        alert("Password cannot be Null");
      }
    };
    const checkMobile = () => {
      let mobile = document.getElementById("mobile").value;
      let phoneno = /^\d{10}$/;
      if (mobile.length < 10) {
        alert("Phone number cannot be less than 10");
        window.history.back();
      } else if (mobile.length > 10) {
        alert("Phone number cannot be greater than 10");
      } else {
        alert("Phone number is not correct");
        window.history.back();
      }
    };
    return (
      <div className="container">
        <div className="container__image">
          <img
            className="container__image__background"
            src={Background}
            alt="background image"
          />
        </div>
        <div className="container__form">
          <form action="http://localhost:3000/" method="get">
            <h2 className="container__form__heading">Create an account</h2>
            <table className="container__form__table">
              <tr>
                <td className="container__form__tittle">Your Email Address</td>
              </tr>
              <tr>
                <td>
                  <input
                    className="container__form__input"
                    type="email"
                    name="email"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="container__form__tittle">Your Password</td>
              </tr>
              <tr>
                <td>
                  <input
                    id="pass"
                    className="container__form__input"
                    type="password"
                    name="pass"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="container__form__tittle">
                  Confirm your Password
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="confirm_pass"
                    className="container__form__input"
                    type="password"
                    name="confirm_pass"
                    onBlur={checkpass}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="container__form__tittle">Your Full Name</td>
              </tr>
              <tr>
                <input
                  className="container__form__input"
                  type="text"
                  name="name"
                  required
                />
              </tr>
              <tr>
                <td className="container__form__tittle">Your phone number</td>
              </tr>
              <tr>
                <td>
                  <input
                    className="container__form__input"
                    type="tel"
                    name="mobile"
                    id="mobile"
                    onBlur={checkMobile}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="terms_conditions" />I read and
                  agree Term and Conditions
                </td>
              </tr>
            </table>
            <button className="container__form__button" type="submit">
              Create an account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
