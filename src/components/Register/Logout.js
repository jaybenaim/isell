import React, { Component } from "react";
import Cookies from "js-cookie";

class Secret extends Component {
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
        <a href="/account">Account Info</a>
      </>
    );
  }
}

export default Secret;
