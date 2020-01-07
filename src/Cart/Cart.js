import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import "./cart.css";
class Cart extends Component {
  state = {};
  calculateTotal = () => {};

  render() {
    const { cart } = localStorage.cart;
    const cartItems = cart.map((item, i) => {
      return <CheckoutItem {...item} key={i} />;
    });
    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {cart && cartItems}
        <div>Proceed to checkout</div>
      </div>
    );
  }
}

export default Cart;
