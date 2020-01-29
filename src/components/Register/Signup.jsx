import React, { Component } from "react";
import local from "../../Api/local";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import { createCart } from "../../redux/actions";
import axios from "axios";
class Signup extends Component {
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
        console.log(res.data);
        if (res.status === 200) {
          Cookies.set("token", res.data.token, {
            expires: 7
          });
          Cookies.set("id", res.data.userId, {
            expires: 7
          });
          // handleLogin(res.data.userId);
          const data = { id: res.data.userId };
          this.handleCreateCart(data);

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
  handleCreateCart = user => {
    const data = { user, products: [] };

    local
      .post("/carts", data, {})
      .then(res => {
        this.props.createCart(res.data);
      })
      .catch(err => {
        alert("Error creating cart", err);
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

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { item: "item" };
};

export default connect(mapStateToProps, { createCart })(Signup);
