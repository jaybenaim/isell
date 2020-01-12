import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartModal from "../Cart/CartModal";
class Nav extends Component {
  state = {
    showCart: false
  };
  handleShowCart = event => {
    const { showCart } = this.state;
    this.setState({ showCart: !showCart });
  };
  render() {
    const { cart, totalCostBeforeTax, removeFromCart } = this.props;
    const { showCart } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/isell">
            Isell
          </a>

          <button
            className="cart-btn cart-btn-1 btn"
            onClick={() => this.handleShowCart()}
          >
            Cart &nbsp; <span>{cart.qty}</span>
          </button>

          {showCart && (
            <CartModal
              onHide={() => this.handleShowCart()}
              show={showCart}
              cart={cart}
              totalCostBeforeTax={totalCostBeforeTax}
              removeFromCart={removeFromCart}
            />
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                <Link className="nav-link" to="/Products">
                  Products<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
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
              <li data-toggle="collapse" data-target="#navbarNavDropdown">
                <button
                  className="cart-btn btn"
                  onClick={() => this.handleShowCart()}
                >
                  Cart &nbsp; <span>{cart.qty}</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
