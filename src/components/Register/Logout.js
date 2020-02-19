import React, { Component } from "react";
import Cookies from "js-cookie";
import AccountNav from "../Account/AccountNav";
class Logout extends Component {
  state = {};
  handleLogout = () => {
    const { handleLogin } = this.props;
    Cookies.remove("token");
    Cookies.remove("id");
    handleLogin();
  };
  render() {
    return (
      <>
        <button className="logout-btn" onClick={() => this.handleLogout()}>
          Logout
        </button>
        <br />
        <AccountNav />
      </>
    );
  }
}

export default Logout;
