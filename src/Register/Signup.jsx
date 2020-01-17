import React, { Component } from "react";
import local from "../Api/local";
import Cookies from "js-cookie";

import axios from "axios";
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  onSubmit = event => {
    const { handleLogin } = this.props;
    event.preventDefault();
    axios("http://localhost:5000/api/signup", {
      method: "POST",
      data: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          Cookies.set("token", res.data.userId, {
            expires: 7
          });

          handleLogin(res.data.userId);
          this.props.history.push("/");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })

      .catch(err => {
        console.error(err);
        alert("Error creating user, please try again.");
      });
  };
  render() {
    return (
      <div className="register-form-container">
        <form className="login-form" onSubmit={this.onSubmit}>
          <h1>Signup!</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
