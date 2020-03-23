import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartModal from "../Cart/CartModal";
import Register from "../Register/Register";
import { connect } from "react-redux";
import AccountNav from "../Account/AccountNav";

import "./nav.css";
class Nav extends Component {
  state = {
    showCart: false,
    expanded: false
  };
  handleShowCart = event => {
    const { showCart } = this.state;
    this.setState({ showCart: !showCart });
  };

  handleToggler = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { isLoggedIn, handleLogin, cart } = this.props;
    const { qty } = cart;
    const { showCart, expanded } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/isell">
            Isell
          </a>
          <button
            className={
              expanded
                ? "cart-btn cart-btn-1 btn cart-btn-expanded"
                : "cart-btn cart-btn-1 btn"
            }
            onClick={() => this.handleShowCart()}
          >
            <img
              src="https://img.icons8.com/plasticine/100/000000/shopping-cart-promotion.png"
              alt="shopping-cart icon"
              className="cart-icon"
            />
            &nbsp; <span className="cart-qty-icon">{qty}</span>
          </button>
          {showCart && (
            <CartModal onHide={() => this.handleShowCart()} show={showCart} />
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => this.handleToggler()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li
                className="nav-item active"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
              >
                <Link
                  className="nav-link products-nav-link"
                  to={{ pathname: "/Products", state: { isLoggedIn } }}
                >
                  Products
                </Link>
              </li>
              <span className="right-nav">
                <li className="nav-item account-nav-item">
                  <span className="collapse-hr">
                    <hr />
                  </span>

                  <AccountNav />
                </li>
                <li className="nav-item register-nav-item">
                  <Register isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
                </li>
              </span>

              <li data-toggle="collapse" data-target="#navbarNavDropdown">
                <button
                  className="cart-btn btn cart-btn-2"
                  onClick={() => this.handleShowCart()}
                >
                  <img src="https://img.icons8.com/doodle/48/000000/shopping-cart--v1.png"></img>
                  &nbsp; <span>{qty}</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const { cart } = state.handleItem;

  return { cart };
};

export default connect(mapStateToProps, {})(Nav);
