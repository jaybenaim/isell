import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

class Secret extends Component {
  state = {
    redirect: false
  };
  handleLogout = () => {
    Cookies.remove("token");
    this.setState({ redirect: true });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <button className="logout-btn" onClick={() => this.handleLogout()}>
        Logout
      </button>
    );
  }
}

export default Secret;
