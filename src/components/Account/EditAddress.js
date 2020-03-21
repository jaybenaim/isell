import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import backend from "../../Api/backend";
import { connect } from "react-redux";

class EditAddress extends Component {
  state = {
    name: "",
    addressType: "House",
    street: "",
    suite: "",
    province: "ON",
    city: "",
    postalCode: ""
  };
  onSubmit = e => {
    e.preventDefault();
    const {
      showEditForm,
      user: { id },
      profileId,
      address: { _id }
    } = this.props;
    const data = { ...this.state, user: { id } };

    backend(`/addresses/${_id}`, {
      method: "PATCH",
      data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        const {
          getAddresses,
          user: { id }
        } = this.props;
        getAddresses(id);

        showEditForm();
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
  componentDidMount() {
    const {
      address: { addressType, city, name, postalCode, province, street, suite }
    } = this.props;

    this.setState({
      addressType,
      city,
      name,
      postalCode,
      province,
      street,
      suite
    });
  }
  render() {
    const { showEditForm, showForm, address } = this.props;

    return (
      <div>
        <Modal
          show={showForm}
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
                  placeholder={address["name"]}
                  name="name"
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">Recipient name.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Street </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={address["street"]}
                  name="street"
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
                  placeholder={address["suite"]}
                  name="suite"
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Province</Form.Label>
                <Form.Control
                  as="select"
                  name="province"
                  value={address["province"]}
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
                  placeholder={address["city"]}
                  name="city"
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={address["postalCode"]}
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
            <Button onClick={() => showEditForm()}>Close</Button>
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

export default connect(mapStateToProps, {})(EditAddress);
