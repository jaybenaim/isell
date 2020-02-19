import React, { Component } from "react";
import "./account.css";
class Account extends Component {
  state = {
    showOrders: false
  };
  show = itemToShow => {
    const { showOrders } = this.state;
    if (itemToShow === "orders") {
      this.setState({ showOrders: !showOrders });
    }
  };
  render() {
    const { showOrders } = this.state;
    return (
      <div className="account-page">
        <div className="account-orders" onClick={() => this.show("orders")}>
          Orders
        </div>
        {showOrders && <div className="account-orders-items"></div>}
        <div className="account-addresses">Addresses</div>
        <div className="account-settings">Settings</div>
      </div>
    );
  }
}

export default Account;
