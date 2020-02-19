import React, { Component } from "react";
class AccountHover extends Component {
  state = {};
  render() {
    const { showAccountClass, showAccountMenu } = this.props;
    return (
      <div
        className="account-link-container"
        onMouseLeave={() => showAccountMenu()}
      >
        <ul className={showAccountClass}>
          <li>Your Account</li>
          <a href="/cart">
            <li>Your Cart</li>
          </a>
        </ul>
        {showAccountClass === "account-link-mobile" && (
          <div
            className="account-hover-close"
            onClick={() => showAccountMenu("none")}
          >
            Hide
          </div>
        )}
      </div>
    );
  }
}

export default AccountHover;
