import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import "./cart.css";
class Cart extends Component {
  state = {
    subTotal: 0
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
  componentDidMount() {
    this.calculateTotal();
  }
  render() {
    const { params } = this.props.location;
    const { subTotal } = this.state;

    return (
      <div className="cart-container">
        <h1>Review Order</h1>
        {params && this.showCheckoutItems()}
        <div>
          SubTotal: <span> {subTotal}</span>
        </div>
        <div>Proceed to checkout</div>
      </div>
    );
  }
}

export default Cart;
