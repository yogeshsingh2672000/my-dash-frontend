import React, { Component } from "react";
import Background from "./background.png";

class Home extends Component {
  // state = {  }
  render() {
    return (
      <div className="container">
        <div className="container__image">
          <img src={Background} alt="background image" />
        </div>
        <div className="container__form">
          <form action="#" method="post">
            <table>
              <tr>
                <td className="contianer__form__tittle">Your Email Address</td>
              </tr>
              <tr>
                <td>
                  <input type="email" name="email" />
                </td>
              </tr>
              <tr>
                <td className="contianer__form__tittle">Your Password</td>
              </tr>
              <tr>
                <td>
                  <input type="password" name="pass" />
                </td>
              </tr>
              <tr>
                <td className="contianer__form__tittle">
                  Confirm your Password
                </td>
              </tr>
              <tr>
                <td>
                  <input type="password" name="pass" />
                </td>
              </tr>
              <tr>
                <td className="contianer__form__tittle">Your Full Name</td>
              </tr>
              <tr>
                <input type="text" name="name" />
              </tr>
              <tr>
                <td className="contianer__form__tittle">Your phone number</td>
              </tr>
              <tr>
                <td>
                  <input type="tel" name="mobile" />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
