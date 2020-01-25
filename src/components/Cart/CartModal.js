import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import { connect } from "react-redux";

import "./cartModal.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class CartModal extends Component {
  state = {};
  showCartItems = () => {
    const { cart } = this.props;
    const { qty, items } = cart;

    if (qty >= 1) {
      let cartItems = items.map((item, i) => {
        return <CartItem item={item} key={i} hideModal={this.checkout} />;
      });
      return cartItems;
    } else {
      return (
        <CartItem
          item={{ name: null, price: null, description: null, image: null }}
          error="Your cart is empty"
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
    const { cart, onHide, totalCostBeforeTax, removeFromCart } = props;

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
          <Button onClick={onHide} variant="outline-danger">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>{this.showCartItems()}</Modal.Body>
        <Modal.Footer>
          <Link
            className="nav-link btn-success proceed-to-checkout-btn"
            onClick={() => this.checkout()}
            to={{
              pathname: `/ShoppingCart`,
              params: { totalCostBeforeTax, removeFromCart },
              state: { cart }
            }}
          >
            Proceed to checkout
            <br />
            <span className="proceed-to-checkout-total">
              Total: ${totalCostBeforeTax}
            </span>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { items, qty, totalCostBeforeTax } = state.handleItem;
  const cart = { items, qty };
  return { cart, totalCostBeforeTax };
};

export default connect(mapStateToProps, {})(CartModal);
