import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions";

import "./cart.css";
class Cart extends Component {
  state = {
    isCheckedOut: false,
    tax: 0,
    proccessFee: 0,
    subTotal: 0
  };

  showCheckoutItems = () => {
    const { cart } = this.props;
    const { items, qty } = cart;
    let cartItems = items.map((item, i) => {
      return <CheckoutItem {...item} key={i} cartQty={qty} />;
    });
    return cartItems;
  };
  handleCheckout = value => {
    const { isCheckedOut } = this.state;
    this.setState({ isCheckedOut: !isCheckedOut || value });
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
        <div className="stripe-container">
          <button
            className="outline-danger btn"
            onClick={() => this.handleCheckout(false)}
          >
            x
          </button>

          <h1>Confirm</h1>
          <div className="checkout-container">
            <Elements>
              <CheckoutForm subTotal={validTotal} />
            </Elements>
          </div>
        </div>
      </StripeProvider>
    );
  };

  calculateSubTotal = totalCostBeforeTax => {
    totalCostBeforeTax = Number(totalCostBeforeTax);
    const taxPercentage = 0.13;
    let totalWithTax = totalCostBeforeTax * taxPercentage;
    let proccessFee = totalCostBeforeTax * 0.029 + 0.35;
    let subTotal = totalCostBeforeTax + totalWithTax + proccessFee;

    const results = {
      tax: totalWithTax.toFixed(2),
      proccessFee: proccessFee.toFixed(2),
      subTotal: subTotal.toFixed(2)
    };
    return results;
  };

  componentDidMount() {}

  render() {
    const { cart, totalCostBeforeTax, items } = this.props;
    const { isCheckedOut } = this.state;
    const total = this.calculateSubTotal(totalCostBeforeTax);
    const { tax, proccessFee, subTotal } = total;

    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {cart && this.showCheckoutItems()}
        <div className="checkout-total-container">
          <div className="checkout-messege">
            You have{" "}
            {cart.qty >= 2 ? `${cart.qty} items ` : `${cart.qty} item `}
            in your cart.
          </div>

          <span className="checkout-label-tax">Tax:</span>
          <span className="checkout-amount-tax"> {tax}</span>
          <div className="checkout-label-process-fees">Process Fee:</div>
          <span className="checkout-amount-fees">{proccessFee}</span>

          <div className="checkout-label-subtotal">
            <strong>SubTotal:</strong>
          </div>
          <span className="checkout-subtotal">CAD ${subTotal}</span>
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
const mapStateToProps = state => {
  const {
    cart,
    cart: { totalCostBeforeTax, items }
  } = state.handleItem;

  return { cart, totalCostBeforeTax, items };
};

export default connect(mapStateToProps, { removeItem })(Cart);
