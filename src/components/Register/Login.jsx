import React, { Component } from "react";
import { Link } from "react-router-dom";
import local from "../../Api/local";
import axios from "axios";
import Cookies from "js-cookie";
import "./login.css";
import { connect } from "react-redux";
import { getCart } from "../../redux/actions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      containerClass: !this.props.redirect
        ? "register-form-container"
        : "register-form-container login-redirect",
      isLoaded: false
    };
  }
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  onSubmit = event => {
    const { handleLogin, redirect } = this.props;
    this.setState({ isLoaded: true });
    event.preventDefault();
    local("/authenticate/", {
      method: "POST",
      data: this.state,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        const { token, id } = res.data;
        if (res.status === 200) {
          Cookies.set("token", token, {
            expires: 7
          });
          Cookies.set("id", id, {
            expires: 7
          });

          console.log("Cookie: ", Cookies.get());

          handleLogin(res.data.token, res.data.id);

          this.handleGetCart(id);

          this.props.history.push("/");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.log(err);
        alert("Error logging in please try again");
        this.setState({ isLoaded: false });
      });
  };
  handleGetCart = async id => {
    await local
      .get(`/carts/find/${id}`)
      .then(res => {
        console.log(res, id);
        this.props.getCart(res.data);
        this.setState({ isLoaded: true });
      })
      .catch(err => {
        alert("Error getting cart", err);
      });
  };

  render() {
    const { redirect } = this.props;
    const { containerClass, isLoaded } = this.state;
    return (
      <div className={containerClass}>
        <form className="login-form" onSubmit={this.onSubmit}>
          <h1>Login Below!</h1>
          {isLoaded && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
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

export default connect(mapStateToProps, { getCart })(Login);
