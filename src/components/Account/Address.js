import React, { Component } from "react";
import AddressForm from "./AddressForm";
import local from "../../Api/local";
import { connect } from "react-redux";
import { getProfile } from "../../redux/actions";
import EditAddress from "./EditAddress";
import "./address.css";
class Address extends Component {
  state = {
    showAddressForm: false,
    showEditForm: false,
    newData: "",
    addresses: [],
    editKey: ""
  };

  showAddressForm = () => {
    const { showAddressForm } = this.state;
    this.setState({ showAddressForm: !showAddressForm });
  };
  handleAddAddress = data => {
    this.showAddress(data);
  };
  showEditForm = i => {
    const { showEditForm } = this.state;
    this.setState({ showEditForm: !showEditForm, editKey: i });
  };
  editInfo = i => {
    this.showEditForm(i);
  };
  showAddresses = data => {
    const { addresses } = this.state;
    console.log(typeof addresses);
    if (addresses) {
      const a = addresses.map((address, i) => {
        let {
          name,
          addressType,
          street,
          suite,
          province,
          city,
          postalCode
        } = address;

        return (
          <div className="shipping-address" key={i}>
            <br />
            <p>
              Name: {name || "N/A"}
              &nbsp; &nbsp;{" "}
            </p>
            <p>Address Type: {addressType || "N/A"}</p>
            <p>Street: {street || "N/A"}</p>
            <p>Suite/Apt: {suite || "N/A"}</p>
            <p>Province: {province || "N/A"}</p>
            <p>City: {city || "N/A"}</p>
            <p>Postal Code: {postalCode || "N/A"}</p>
            <span onClick={() => this.editInfo(i)}>Edit</span> <hr />
          </div>
        );
      });
      return a;
    }
    return addresses;
  };
  getProfile = () => {
    const {
      user: { id }
    } = this.props;
    local(`/profiles/find/${id}`, {
      method: "GET"
    })
      .then(res => {
        console.log(res.data);
        this.props.getProfile(res.data);
        const { shippingInfo } = this.props.profile;
        setTimeout(() => {
          this.setState({
            profileId: res.data._id,
            addresses: shippingInfo
          });
        }, 500);
      })
      .catch(err => {
        alert("Something went wrong");
      });
  };
  componentDidMount = () => {
    this.getProfile();
  };
  render() {
    const {
      showAddressForm,
      showEditForm,
      addresses,
      editKey,
      profileId
    } = this.state;

    return (
      <div>
        <h4>Shipping Address</h4>
        {this.showAddresses()}
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
        {showAddressForm && (
          <AddressForm
            showForm={showAddressForm}
            showAddressForm={this.showAddressForm}
            handleAddAddress={this.handleAddAddress}
          />
        )}
        {showEditForm && (
          <EditAddress
            showForm={showEditForm}
            address={{ ...addresses[editKey] }}
            showEditForm={this.showEditForm}
            profileId={profileId}
          />
        )}

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
