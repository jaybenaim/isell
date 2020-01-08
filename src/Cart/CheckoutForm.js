import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // user clicked submit
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("https://api.stripe.com/v1/checked/sessions/", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        Authorization: "Bearer sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH"
      },
      body: token.id
    });

    if (response.ok) this.setState({ complete: true });
  }
  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement name="juul skin" />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
