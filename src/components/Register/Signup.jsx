import React, { Component } from "react";
import backend from "../../Api/backend";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import { createCart } from "../../redux/actions";
import axios from "axios";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { handleLogin } = this.props;

    this.setState({ isLoaded: true });

    event.preventDefault();
    backend("/signup", {
      method: "POST",
      data: JSON.stringify(this.state),
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
          Cookies.set("id", res.data.userId, {
            expires: 7
          });
          // TODO

          /// USE REDUX TO SET ADDRESS STATE
          // USE res.data.profile

          handleLogin(res.data.token, res.data.userId);
          const data = { id: res.data.userId };
          this.handleCreateCart(data);

          this.props.history.push("/");
        } else {
          this.setState({ isLoaded: false });
          const error = new Error(res.error);
          throw error;
        }
      })

      .catch(err => {
        console.error(err);
        this.setState({ isLoaded: false });
        alert("User exists, Please try another username.");
      });
  };
  handleCreateCart = user => {
    const data = { user, products: [] };

    backend
      .post("/carts", data, {})
      .then(res => {
        this.props.createCart(res.data);
        this.setState({ isLoaded: true });
      })
      .catch(err => {
        alert("Error creating cart", err);
      });
  };
  componentWillUnmount() {
    this.setState({ isLoaded: false });
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <div className="register-form-container">
        <form className="login-form" onSubmit={this.onSubmit}>
          <h1>Signup!</h1>
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
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { item: "item" };
};

export default connect(mapStateToProps, { createCart })(Signup);
