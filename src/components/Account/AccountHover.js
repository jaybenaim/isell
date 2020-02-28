import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class AccountHover extends Component {
  state = {};
  render() {
    const { showAccountClass, showAccountMenu } = this.props;
    return (
      <div
        className="account-link-container"
        onMouseLeave={() => showAccountMenu("none")}
      >
        <ul className={showAccountClass}>
          <Link to="/account">
            <li onClick={() => showAccountMenu("none")}>Your Account</li>
          </Link>
          <Link to="/cart">
            <li onclick={() => showAccountMenu("none")}>
              Your Cart
              <img src="https://img.icons8.com/doodle/48/000000/shopping-cart--v1.png"></img>
            </li>
          </Link>
        </ul>
        {showAccountClass === "account-link-mobile" && (
          <div
            className="account-hover-close"
            onClick={() => showAccountMenu("none")}
          >
            Hide
          </div>
        )}
        <a href="https://icons8.com/icon/80857/shopping-cart"></a>
      </div>
    );
  }
}

export default AccountHover;
