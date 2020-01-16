import React, { Component } from "react";
import Cookies from "js-cookie";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import local from "../Api/local";
import backend from "../Api/backend";
import Axios from "axios";
import "./register.css";

class Register extends Component {
  state = {
    isLoggedIn: Cookies.get("token") === undefined ? false : true,
    userSelected: ""
  };
  showForm = userAction => {
    if (userAction === "login") {
      this.setState({ userSelected: "login" });
    } else if (userAction === "signup") {
      this.setState({ userSelected: "signup" });
    } else if (userAction === "logout") {
      this.setState({ userSelected: "" });
    }
  };
  handleLogin = () => {
    const { isLoggedIn } = this.state;
    this.setState({ isLoggedIn: !isLoggedIn, userSelected: "" });
  };

  // getSecret = () => {
  //   console.log(Cookies.get("token"));
  //   local.get("/checkToken", { withCredentials: true }).then(res => {
  //     console.log(res);
  //   });
  // };
  // componentDidMount() {
  //   console.log(Cookies.get("token"));
  // }

  render() {
    const { userSelected, isLoggedIn } = this.state;

    return (
      <div className="auth">
        {isLoggedIn ? (
          <div>
            <Logout handleLogin={this.handleLogin} />
            Logged In
          </div>
        ) : (
          <>
            <div className="login-container">
              <button
                className="login-btn"
                onClick={() => this.showForm("login")}
              >
                Login
              </button>
              <br />
              <button
                className="signup-btn"
                onClick={() => this.showForm("signup")}
              >
                Signup
              </button>
            </div>
          </>
        )}

        {userSelected === "login" && <Login handleLogin={this.handleLogin} />}
        {userSelected === "signup" && <Signup handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default Register;
