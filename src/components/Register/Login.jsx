import React, { Component } from "react";
import { Link } from "react-router-dom";
import local from "../../Api/local";
import axios from "axios";
import Cookies from "js-cookie";
import "./login.css";
import { connect } from "react-redux";
import { createCart } from "../../redux/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      containerClass: !this.props.redirect
        ? "register-form-container"
        : "register-form-container login-redirect"
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
    axios("http://localhost:5000/api/authenticate", {
      method: "POST",
      data: this.state,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          Cookies.set("token", res.data.token, {
            expires: 7
          });
          Cookies.set("id", res.data.id, {
            expires: 7
          });

          handleLogin(res.data.token);
          this.handleCreateCart(res.data);
          this.props.history.push("/");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
  handleCreateCart = response => {
    const id = Cookies.get("id");
    console.log(id);
    const data = { user: { id } };
    const { isLoggedIn } = this.state;
    isLoggedIn &&
      local
        .post("/carts", data, {})
        .then(res => {
          this.props.createCart(res.data);
          console.log(res.data);
        })
        .catch(err => {
          alert("Error creating cart", err);
        });
  };
  render() {
    const { redirect } = this.props;
    const { containerClass } = this.state;
    return (
      <div className={containerClass}>
        <form className="login-form" onSubmit={this.onSubmit}>
          <h1>Login Below!</h1>
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
        {redirect && (
          <Link to="/signup" className="signup-redirect-btn">
            Signup
          </Link>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { totalCostBeforeTax, cart, user } = state.handleItem;

  return { totalCostBeforeTax, cart, user };
};

export default connect(mapStateToProps, { createCart })(Login);
