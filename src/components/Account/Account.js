import React, { Component } from "react";
import "./account.css";
class Account extends Component {
  state = {};
  render() {
    return (
      <div className="account-page">
        <div className="account-orders ">Orders</div>
        <div className="account-addresses">Addresses</div>
        <div className="account-settings">Settings</div>
      </div>
    );
  }
}

export default Account;
