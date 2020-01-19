import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Redirect } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./cart.css";
import axios from "axios";
class Cart extends Component {
  state = {
    isCheckedOut: false
  };

  showCheckoutItems = () => {
    const { removeFromCart } = this.props.location.params;
    const { cart } = this.props.location.state;
    const { items, qty } = cart;
    let cartItems = items.map((item, i) => {
      return (
        <CheckoutItem
          {...item}
          key={i}
          removeFromCart={removeFromCart}
          cartQty={qty}
        />
      );
    });
    return cartItems;
  };
  handleCheckout = () => {
    const { isCheckedOut } = this.state;

    this.setState({ isCheckedOut: !isCheckedOut });
  };
  showCheckoutForm = () => {
    const { totalCostBeforeTax } = this.props.location.params;
    const PK_TEST = "pk_test_kUyitnXXbG5Rg8HhhfYhnklR00qMm6iAaZ";
    const PK_LIVE = process.env.PK_LIVE;
    const validTotal = (
      this.calculateSubTotal(totalCostBeforeTax).subTotal * 100
    ).toFixed(2);
    return (
      <StripeProvider apiKey={PK_TEST}>
        <div className="example">
          <h1>Confirm</h1>
          <Elements>
            <CheckoutForm subTotal={validTotal} />
          </Elements>
        </div>
      </StripeProvider>
    );
  };

  calculateSubTotal = totalCostBeforeTax => {
    const taxPercentage = 0.13;
    let totalWithTax = Number(totalCostBeforeTax) * taxPercentage;
    let proccessFee = totalCostBeforeTax * 0.029 + 0.35;
    let subTotal = totalCostBeforeTax + totalWithTax + proccessFee;

    const results = {
      tax: totalWithTax.toFixed(2),
      proccessFee: proccessFee.toFixed(2),
      subTotal: subTotal.toFixed(2)
    };

    return results;
  };
  // handleDelete = id => {
  //   const { cart, removeFromCart } = this.props.location.params;

  //   removeFromCart(id);

  //   return cart.qty <= 1 ? (
  //     <Redirect to="/" />
  //   ) : (
  //     <Redirect to={{ pathname: "/ShoppingCart", state: { cart } }} />
  //   );
  // };
  componentDidUpdate() {}
  render() {
    const { params = 0, state } = this.props.location;
    const { cart } = state;
    const { totalCostBeforeTax = 0 } = params;
    const { isCheckedOut } = this.state;
    const total = this.calculateSubTotal(totalCostBeforeTax);
    const { tax, proccessFee, subTotal } = total;
    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {state && this.showCheckoutItems()}
        <div className="checkout-total-container">
          <div className="checkout-message">
            You have {cart.qty} items in your cart.
          </div>
          <span className="checkout-label-tax">Tax:</span>
          <span className="checkout-amount-tax"> {tax}</span>
          <div className="checkout-label-process-fees">Process Fee:</div>
          <span className="checkout-amount-fees">{proccessFee}</span>

          <div className="checkout-label-subtotal">
            <strong>SubTotal:</strong>
          </div>
          <span className="checkout-subtotal">${subTotal}</span>
        </div>

        <div
          className="checkout-btn btn btn-success"
          onClick={() => this.handleCheckout()}
        >
          Proceed to checkout
        </div>
        {isCheckedOut && this.showCheckoutForm()}
      </div>
    );
  }
}

export default Cart;
