import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import backend from "../../Api/backend";
import { connect } from "react-redux";

class AddressForm extends Component {
  state = {
    name: "",
    addressType: "House",
    streetAddress: "",
    suite: "",
    prov: "ON",
    city: "",
    postalCode: "",
    placeholder: ""
  };
  onSubmit = e => {
    e.preventDefault();
    const {
      handleAddAddress,
      showAddressForm,
      user: { id }
    } = this.props;
    const data = { shippingInfo: this.state, profile: { id } };

    backend("/addresses/", {
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data);
        showAddressForm();
        handleAddAddress(data);
      })
      .catch(err => {
        alert("Something went wrong");
      });
  };

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { showAddressForm, edit, address } = this.props;
    return (
      <div>
        <Modal
          show={showAddressForm}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Shipping Info
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Smith"
                  name="name"
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">Recipient name.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"222 Example Road"}
                  name="streetAddress"
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Address Type</Form.Label>
                <Form.Control
                  as="select"
                  name="addressType"
                  onChange={this.handleInputChange}
                >
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Business</option>
                  <option>Hotel</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Suite/Apt #</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="402"
                  name="suite"
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Province</Form.Label>
                <Form.Control
                  as="select"
                  name="prov"
                  onChange={this.handleInputChange}
                >
                  <option>AB</option>
                  <option>BC</option>
                  <option>MB</option>
                  <option>NB</option>
                  <option>NL</option>
                  <option>NS</option>
                  <option>ON</option>
                  <option>PE</option>
                  <option>QC</option>
                  <option>SK</option>
                  <option>NT</option>
                  <option>NU</option>
                  <option>YT</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Toronto"
                  name="city"
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="X3X 3X3"
                  name="postalCode"
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={e => this.onSubmit(e)}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => showAddressForm()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  let { user } = state.handleItem;
  return { user };
};

export default connect(mapStateToProps, {})(AddressForm);
