import React, { Component } from "react";
import AccountHover from "./AccountHover";
import "./accountNav.css";

class AccountNav extends Component {
  state = {
    showAccountClass: "account-link"
  };
  showAccountMenu = show => {
    if (show === "mobile") {
      this.setState({ showAccountClass: "account-link-mobile" });
    } else if (show === "show") {
      this.setState({ showAccountClass: "account-link-show" });
    } else {
      this.setState({ showAccountClass: "account-link" });
    }
  };
  render() {
    const { showAccountClass } = this.state;
    return (
      <>
        <span
          className="account-nav-link"
          onMouseEnter={() => this.showAccountMenu("show")}
          onClick={() => this.showAccountMenu("mobile")}
        >
          Account
        </span>
        <AccountHover
          showAccountClass={showAccountClass}
          showAccountMenu={this.showAccountMenu}
        />
      </>
    );
  }
}

export default AccountNav;
