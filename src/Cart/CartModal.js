import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import CartItem from "./CartItem";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class CartModal extends Component {
  state = {};
  showCartItems = () => {
    const { qty, items } = this.props.cart;

    if (qty >= 1) {
      let cartItems = items.map((item, i) => {
        return <CartItem item={item} key={i} />;
      });
      return cartItems;
    } else {
      return (
        <CartItem
          item={{ name: null, price: null, description: null, image: null }}
          error="No Items Found"
        />
      );
    }
  };
  checkout = () => {
    const { onHide } = this.props;
    onHide();
  };

  render() {
    const { props } = this;
    const { cart } = props;

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.showCartItems()}</Modal.Body>
        <Modal.Footer>
          <Link
            className="nav-link"
            onClick={() => this.checkout()}
            to={{
              pathname: "/ShoppingCart",
              params: cart
            }}
          >
            Proceed to checkout
          </Link>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CartModal;
