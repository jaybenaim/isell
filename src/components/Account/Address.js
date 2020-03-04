import React, { Component } from "react";
import AddressForm from "./AddressForm";
import local from "../../Api/local";
import { connect } from "react-redux";
import { getProfile } from "../../redux/actions";

import "./address.css";
class Address extends Component {
  state = {
    showForm: false
  };
  showAddressForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };
  handleAddAddress = data => {
    // this.showAddressForm();
    this.showAddress(data);
  };
  showAddress = data => {
    const {
      shippingInfo,
      shippingInfo: {
        name,
        addressType,
        streetAddress,
        suite,
        prov,
        city,
        postalCode
      }
    } = data;
    return shippingInfo["name"] ? (
      <div>
        {name}
        <br /> {addressType}
        <br /> {streetAddress}
        <br /> {suite}
        <br /> {prov}
        <br /> {city}
        <br /> {postalCode}
      </div>
    ) : (
      <div>No Shipping Info</div>
    );
  };
  getProfile = () => {
    const {
      user: { id }
    } = this.props;
    local(`/profiles/find/${id}`, {
      method: "GET"
    })
      .then(res => {
        this.props.getProfile(res.data);
        console.log(res.data);
      })
      .catch(err => {
        alert("Something went wrong");
      });
  };
  componentDidMount = () => {
    this.getProfile();
  };
  render() {
    const { showForm } = this.state;

    return (
      <div>
        <h4>Shipping Address</h4>
        {this.showAddress({ shippingInfo: [] })}

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
const mapStateToProps = state => {
  let { user } = state.handleItem;
  let { profile } = state.handleProfile;
  return { user, profile };
};

export default connect(mapStateToProps, { getProfile })(Address);
