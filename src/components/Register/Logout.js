import React, { Component } from "react";
import Cookies from "js-cookie";
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
        <div className="logout-btn" onClick={() => this.handleLogout()}>
          Logout
        </div>
        <br />
      </>
    );
  }
}

export default Logout;
