import React, { Component } from "react";
import Background from "./background.png";
import scss from "./homePage.scss";

class Home extends Component {
  // state = {  }
  render() {
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
          <form action="#" method="post">
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
                  />
                </td>
              </tr>
              <tr>
                <td className="container__form__tittle">Your Password</td>
              </tr>
              <tr>
                <td>
                  <input
                    className="container__form__input"
                    type="password"
                    name="pass"
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
                    className="container__form__input"
                    type="password"
                    name="pass"
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
                  />
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
