import React, { Component } from "react";
import AddressForm from "./AddressForm";
import "./address.css";
class Address extends Component {
  state = {
    showForm: false
  };
  showAddressForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };
  handleAddAddress = () => {
    // this.showAddressForm();
    console.log("hit");
  };
  render() {
    const { showForm } = this.state;

    return (
      <div>
        <h4>Shipping Address</h4>
        <button
          className="add-address-btn"
          onClick={() => this.showAddressForm()}
        >
          <img
            src="https://img.icons8.com/ios/50/000000/plus.png"
            alt="add address"
            className="add-address-icon"
          />
          Add an address
        </button>

        <AddressForm
          showForm={showForm}
          showAddressForm={this.showAddressForm}
          handleAddAddress={this.handleAddAddress}
        />
        <a href="https://icons8.com/icon/1501/plus"></a>
      </div>
    );
  }
}

export default Address;
