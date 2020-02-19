import React, { Component } from "react";
class Address extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>Shipping Address</h4>
        <button className="add-address-btn">
          <img
            src="https://img.icons8.com/ios/50/000000/plus.png"
            alt="add address"
            className="add-address-icon"
          />
          Add an address
        </button>
        <a href="https://icons8.com/icon/1501/plus"></a>
      </div>
    );
  }
}

export default Address;
