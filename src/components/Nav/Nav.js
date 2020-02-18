import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartModal from "../Cart/CartModal";
import Register from "../Register/Register";
import { connect } from "react-redux";

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
            Cart &nbsp; <span>{qty}</span>
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
                  className="nav-link"
                  to={{ pathname: "/Products", state: { isLoggedIn } }}
                >
                  Products<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/">
                  Pricing
                </a> */}
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              */}
              <li data-toggle="collapse" data-target="#navbarNavDropdown">
                <button
                  className="cart-btn btn cart-btn-2"
                  onClick={() => this.handleShowCart()}
                >
                  Cart &nbsp; <span>{qty}</span>
                </button>
              </li>
            </ul>
          </div>

          <Register isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
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
