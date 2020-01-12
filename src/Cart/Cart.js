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
    const { cart, totalCostBeforeTax } = this.props.location.params;
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
            <CheckoutForm totalCostBeforeTax={totalCostBeforeTax} />
          </Elements>
        </div>
      </StripeProvider>
    );
  };
  calculateTax = totalCostBeforeTax => {
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
    const { totalCostBeforeTax } = params;
    const { subTotal, isCheckedOut } = this.state;

    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {params && this.showCheckoutItems()}
        <div className="checkout-total-container">
          <span> Tax: ${this.calculateTax(totalCostBeforeTax).tax}</span>
          <span>
            {" "}
            Process Fee: ${this.calculateTax(totalCostBeforeTax).proccessFee}
          </span>
          <span>
            {" "}
            SubTotal: ${this.calculateTax(totalCostBeforeTax).subTotal}
          </span>
        </div>
        {isCheckedOut && this.showCheckoutForm()}
        <div onClick={() => this.handleCheckout()}>Proceed to checkout</div>
      </div>
    );
  }
}

export default Cart;
