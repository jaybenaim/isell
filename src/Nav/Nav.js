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
    const { cart } = this.props;
    const { showCart } = this.state;
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Isell
          </a>

          <button
            className="cart-btn btn"
            onClick={() => this.handleShowCart()}
          >
            Cart &nbsp; <span>{cart.qty}</span>
          </button>

          {showCart && (
            <CartModal
              onHide={() => this.handleShowCart()}
              show={showCart}
              cart={cart}
            />
          )}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link className="nav-link" to="/">
                  Isell <span class="sr-only">(current)</span>
                </Link>
                <a class="nav-link" href="#"></a>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/ShoppingCart",
                    state: {
                      showCart,
                      handleShowCart: this.handleShowCart
                    }
                  }}
                >
                  Cart &nbsp;<span>{cart.qty}</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
