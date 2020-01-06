import React, { Component } from "react";
class ProductShow extends Component {
  state = {};
  render() {
    const { name, description, price, image } = this.props.location.state;
    console.log(this);
    return (
      <div class="container">
        <h1 class="mt-4 mb-3">
          <small> {name}</small>
        </h1>

        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active">{name}</li>
        </ol>

        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" src={image} alt={name} />
          </div>

          <div class="col-md-4">
            <h3 class="my-3">Project Description</h3>
            <p>{description}</p>

            <h3 class="my-3">{price}</h3>
          </div>
        </div>

        <h3 class="my-4">Related Projects</h3>

        <div class="row">
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                class="img-fluid"
                src="http://placehold.it/500x300"
                alt={name}
              />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShow;
