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
    const { cart } = this.props.location.params;
    const { items } = cart;

    let cartItems = items.map((item, i) => {
      return <CheckoutItem {...item} key={i} />;
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
    const { subTotal, isCheckedOut } = this.state;

    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {params && this.showCheckoutItems()}
        <div className="checkout-total-container">
          <div className="checkout-message">
            You have {cart.qty} items in your cart.
          </div>
          <span className="checkout-total-tax">
            <strong>Tax:</strong> $
            {this.calculateSubTotal(totalCostBeforeTax).tax}
          </span>
          <span className="checkout-total-process-fees">
            <strong>Process Fee:</strong> $
            {this.calculateSubTotal(totalCostBeforeTax).proccessFee}
          </span>
          <span className="checkout-total-subtotal">
            <strong>SubTotal:</strong> $
            {this.calculateSubTotal(totalCostBeforeTax).subTotal}
          </span>
          <div
            className="checkout-btn btn btn-success"
            onClick={() => this.handleCheckout()}
          >
            Proceed to checkout
          </div>
        </div>
        {isCheckedOut && this.showCheckoutForm()}
      </div>
    );
  }
}

export default Cart;
