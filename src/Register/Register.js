import React, { Component } from "react";
import Cookies from "js-cookie";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import local from "../Api/local";
import backend from "../Api/backend";
import Axios from "axios";
import "./register.css";

class Register extends Component {
  state = {
    isLoggedIn: Cookies.get("token") === undefined ? false : true,
    userSelected: ""
  };

  render() {
    const { isLoggedIn, redirect } = this.state;

    return (
      <div className="auth">
        {isLoggedIn ? (
          <div>
            <Logout />
            Logged In
          </div>
        ) : (
          <>
            <div className="login-container">
              <div className="login-btn">
                <Link
                  to={{
                    pathname: "/login"
                  }}
                >
                  Login
                </Link>
              </div>
              <br />
              <div className="signup-btn">
                <Link
                  to={{
                    pathname: "/signup"
                  }}
                >
                  Signup
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Register;
