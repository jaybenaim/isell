import React, { Component } from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import "./register.css";

class Register extends Component {
  state = {};

  render() {
    const { isLoggedIn, handleLogin } = this.props;
    return (
      <div className="auth">
        {isLoggedIn ? (
          <div>
            <Logout handleLogin={handleLogin} />
          </div>
        ) : (
          <>
            <div className="login-container">
              <div className="login-btn">
                <Link to="/login">Login</Link>
              </div>
              <br />
              <div className="signup-btn">
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Register;
