import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import backend from "../../Api/backend";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // user clicked submit
    const SK_TEST = "sk_test_59y42s9amXyOuAPudcbNBta500g0JElmda";
    const SK_LIVE = process.env.SK_LIVE;
    let { subTotal } = this.props;
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log(subTotal);
    subTotal = Math.round(subTotal);
    subTotal = JSON.stringify(subTotal);

    let response = await backend("/stripe/charge", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        Authorization: `Bearer ${SK_TEST}`,
        token: token.id,
        total: subTotal
      }
    });
    if (response.statusText === "OK") this.setState({ complete: true });
  }
  render() {
    let { subTotal } = this.props;
    subTotal = Math.round(subTotal);
    subTotal = JSON.stringify(subTotal);
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase for ${subTotal / 100}? </p>
        <CardElement />
        <button onClick={this.submit} class="btn btn-outline-success">
          Purchase
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
