import React, { Component } from "react";
import Address from "./Address";
import "./account.css";
class Account extends Component {
  state = {
    showOrders: false,
    showAddress: false
  };
  show = itemToShow => {
    const { showOrders, showAddress } = this.state;
    if (itemToShow === "orders") {
      this.setState({ showOrders: !showOrders });
    }
    if (itemToShow === "address") {
      this.setState({ showAddress: !showAddress });
    }
    if (itemToShow === "orders") {
      this.setState({ showOrders: !showOrders });
    }
  };
  render() {
    const { showOrders, showAddress } = this.state;
    return (
      <div className="account-page">
        <div className="account-orders" onClick={() => this.show("orders")}>
          Orders
        </div>
        {showOrders && (
          <div className="account-orders-items">
            <strong>No Orders Yet.</strong>
          </div>
        )}
        <div className="account-address" onClick={() => this.show("address")}>
          Address
        </div>
        {showAddress && (
          <div className="account-address-items">
            <Address />{" "}
          </div>
        )}
        {/* // TODO // */}
        {/* <div className="account-settings">Settings</div>
        {showSettings && <div className="account-settings-items"></div>} */}
      </div>
    );
  }
}

export default Account;
