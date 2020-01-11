import React, { Component } from "react";
import FeaturedProducts from "../Products/FeaturedProducts";
class Home extends Component {
  state = {};
  render() {
    const { addToCart } = this.props;
    return (
      <>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: `url("https://placehold.it/1900x1080")`
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>First Slide</h3>

                  <p className="discount">50% OFF</p>
                </div>
              </div>
              {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url("https://placehold.it/1900x1080")`
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>Second Slide</h3>
                  <p>This is a description for the second slide.</p>
                </div>
              </div>
              {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url("https://placehold.it/1900x1080")`
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>Third Slide</h3>
                  <p>This is a description for the third slide.</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
        <div>
          <FeaturedProducts addToCart={addToCart} />
        </div>
      </>
    );
  }
}

export default Home;
