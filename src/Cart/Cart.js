import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import "./cart.css";
import axios from "axios";
class Cart extends Component {
  state = {
    isCheckedOut: false
  };

  showCheckoutItems = () => {
    const { cart, removeFromCart } = this.props.location.params;
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
    return (
      <StripeProvider apiKey={PK_TEST}>
        <div className="example">
          <h1>Confirm</h1>
          <Elements>
            <CheckoutForm
              subTotal={this.calculateSubTotal(totalCostBeforeTax).subTotal}
            />
          </Elements>
        </div>
      </StripeProvider>
    );
  };
  calculateSubTotal = totalCostBeforeTax => {
    const taxPercentage = 0.13;
    let totalTax = totalCostBeforeTax * taxPercentage;
    const proccessFee = 0.37;
    const subTotal = totalCostBeforeTax + totalTax + proccessFee;

    const results = {
      tax: totalTax.toFixed(2),
      proccessFee: proccessFee,
      subTotal: subTotal.toFixed(2)
    };

    return results;
  };
  componentDidMount() {}
  render() {
    const { params } = this.props.location;
    const { totalCostBeforeTax, cart } = params;
    const { isCheckedOut } = this.state;
    const total = this.calculateSubTotal(totalCostBeforeTax);
    const { tax, proccessFee, subTotal } = total;
    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {params && this.showCheckoutItems()}
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
