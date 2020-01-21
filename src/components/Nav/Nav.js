import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CartModal from "../Cart/CartModal";
import Register from "../Register/Register";
import ProtectedRoute from "../Register/ProtectedRoute";
import { addUser } from "../../redux/actions";

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
    const {
      cart,
      totalCostBeforeTax,
      removeFromCart,
      isLoggedIn,
      handleLogin,
      users,
      addUser
    } = this.props;
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
                  className="cart-btn btn cart-btn-2"
                  onClick={() => this.handleShowCart()}
                >
                  Cart &nbsp; <span>{cart.qty}</span>
                </button>
              </li>
            </ul>
          </div>

          <button onClick={() => addUser({ name: "jay" })}>
            Add User
            {users.length >= 1 && users.map(user => <div>{user}</div>)}
          </button>

          <Register isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
        </nav>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const users = state;
  return { users };
};

export default connect(mapStateToProps, { addUser })(Nav);
