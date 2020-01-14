import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="auth">
        {screen === "auth" ? (
          <div>
            <label>Username: </label>
            <br />
            <input
              type="text"
              onChange={e => this.setUsername(e.target.value)}
            />
            <br />
            <label>Password: </label>
            <br />
            <input
              type="password"
              onChange={e => this.setPassword(e.target.value)}
            />
            <br />
            <button onClick={() => this.auth()}>Login</button>
          </div>
        ) : (
          <View screen={screen} setScreen={this.setScreen} />
        )}
      </div>
    );
  }
}

export default Register;
