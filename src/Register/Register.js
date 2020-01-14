import React, { Component } from "react";
import Cookies from "js-cookie";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Axios from "axios";

class Register extends Component {
  state = {
    isLoggedIn: Cookies.get("token") === "undefined" ? false : true,
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

  getSecret = () => {
    console.log(Cookies.get("token"));
    Axios.post("http://localhost:5000/api/home").then(res => {
      console.log(res);
    });
  };
  componentDidMount() {
    console.log(Cookies.get("token"));
  }

  render() {
    const { userSelected, isLoggedIn } = this.state;

    return (
      <div className="auth">
        <button onClick={() => this.getSecret()}>GET</button>
        {isLoggedIn ? (
          <div>
            <Logout handleLogin={this.handleLogin} />
            Logged In
          </div>
        ) : (
          <>
            <button onClick={() => this.showForm("login")}>Login</button>
            <button onClick={() => this.showForm("signup")}>Signup</button>
          </>
        )}

        {userSelected === "login" && <Login handleLogin={this.handleLogin} />}
        {userSelected === "signup" && <Signup handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default Register;
