import React, { Component } from "react";
import Cookies from "js-cookie";

class Secret extends Component {
  state = {};
  handleLogout = () => {
    const { handleLogin } = this.props;
    handleLogin();
    Cookies.remove("token");
  };
  render() {
    return (
      <button className="logout-btn" onClick={() => this.handleLogout()}>
        Logout
      </button>
    );
  }
}

export default Secret;
