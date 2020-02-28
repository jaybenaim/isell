import React, { Component } from "react";
import backend from "../../Api/backend";
import { Modal, Button } from "react-bootstrap";
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
    // TODO call api/profiles and post shippingInfo
    this.showAddressForm();
  };
  render() {
    const { showForm } = this.state;

    return (
      <div>
        <h4>Shipping Address</h4>
        <button
          className="add-address-btn"
          onClick={() => this.handleAddAddress()}
        >
          <img
            src="https://img.icons8.com/ios/50/000000/plus.png"
            alt="add address"
            className="add-address-icon"
          />
          Add an address
        </button>

        <div>
          <Modal
            show={showForm}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.showAddressForm()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <a href="https://icons8.com/icon/1501/plus"></a>
      </div>
    );
  }
}

export default Address;
