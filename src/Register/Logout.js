import React, { Component } from "react";
import Cookies from "js-cookie";

class Secret extends Component {
  state = {};
  handleLogout = () => {
    Cookies.remove("token");
    this.props.history.push("/");
  };
  render() {
    return <button onClick={() => this.handleLogout()}>Logout</button>;
  }
}

export default Secret;
