import React from "react";
import paymentRequest from "react-payment-request-api";

const Button = ({ show, isSupported }) =>
  isSupported ? (
    <button onClick={show}>Pay now!</button>
  ) : (
    <span>Payment request not supported</span>
  );

export default paymentRequest()(Button);
