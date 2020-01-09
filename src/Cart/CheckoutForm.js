import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import backend from "../Api/backend";
import local from "../Api/local";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // user clicked submit
    const { subTotal } = this.props;
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let data = { token: token.id, subTotal };
    data = JSON.stringify(data);

    let response = await backend(`/charge`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        Authorization: "Bearer sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH",
        "x-Trigger": "CORS",
        data
      },
      body: token.id
    });

    if (response.statusText === "OK") this.setState({ complete: true });
  }
  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
