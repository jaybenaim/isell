import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import "./cart.css";
import axios from "axios";
class Cart extends Component {
  state = {
    subTotal: 0,
    isCheckedOut: false
  };
  calculateTotal = () => {
    const { params } = this.props.location;
    const { items } = params;
    let total = 0;
    items.map((item, i) => {
      total += Number(item.price);
    });
    this.setState(prevState => {
      return { subTotal: (prevState.subTotal += total) };
    });
  };

  showCheckoutItems = () => {
    const { items } = this.props.location.params;
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
    const { subTotal } = this.state;
    const { PK_LIVE, PK_TEST } = process.env;

    return (
      <StripeProvider apiKey={PK_TEST}>
        <div className="example">
          <h1>Confirm</h1>
          <Elements>
            <CheckoutForm subTotal={subTotal} />
          </Elements>
        </div>
      </StripeProvider>
    );
  };
  componentDidMount() {
    this.calculateTotal();
  }
  render() {
    const { params } = this.props.location;
    const { subTotal, isCheckedOut } = this.state;

    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {params && this.showCheckoutItems()}
        <div>
          SubTotal: <span> {subTotal}</span>
        </div>
        {isCheckedOut && this.showCheckoutForm()}
        <div onClick={() => this.handleCheckout()}>Proceed to checkout</div>
      </div>
    );
  }
}

export default Cart;
