import React, { Component } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../Products/Products";
import { createBrowserHistory } from "history";
import Home from "../Home/Home";
import ProductShow from "../Products/ProductShow";
import Cart from "../Cart/Cart";
import "./App.css";
import Product from "../Data/productSchema";
import CartModal from "../Cart/CartModal";

const history = createBrowserHistory();
class App extends Component {
  state = {
    cartQty: 0,
    cartItems: [],
    totalCostBeforeTax: 0,
    selectedProduct: null,
    addedToCart: false,
    valid: false
  };

  calculateTotal = total => {
    this.setState(prevState => {
      return {
        totalCostBeforeTax: (prevState.totalCostBeforeTax += parseFloat(total))
      };
    });
  };
  checkIfItemIsInCart = item => {
    const { cartItems } = this.state;
    let match = false;
    cartItems.map((cartItem, i) => {
      if (item.name === cartItem.name) {
        this.removeFromCart(item.id);
        match = true;
      } else {
        return false;
      }
    });
    if (match) {
      const { showAlert } = this.state;
      this.setState({ showAlert: !showAlert });
    }
  };
  removeFromCart = id => {
    const { cartItems } = this.state;
    const item = cartItems.filter(item => item.id === id);

    this.calculateTotal(-item[0].price);

    this.setState(prevState => {
      return {
        cartItems: [...prevState.cartItems.filter(item => item.id !== id)],
        cartQty: (prevState.cartQty -= prevState.cartQty >= 1 ? 1 : 0)
      };
    });
  };
  addToCart = (qty, item) => {
    this.checkIfItemIsInCart(item);
    const { addedToCart } = this.state;
    const { id, name, description, price, image } = item;
    const items = [];

    for (let i = 1; i <= qty; i++) {
      this.calculateTotal(price);
    }

    items.push(new Product(id, name, description, price, image, "", qty));
    this.setState(prevState => {
      return {
        cartQty: (prevState.cartQty += qty),
        cartItems: [...prevState.cartItems, ...items],
        addedToCart: !addedToCart
      };
    });
  };
  setSelectedProduct = product => {
    this.setState({ selectProduct: product });
  };

  render() {
    const { cartItems, cartQty, totalCostBeforeTax, showAlert } = this.state;
    return (
      <Router basename="/isell" history={history}>
        <div className="App">
          <Nav
            cart={{ qty: cartQty, items: cartItems }}
            totalCostBeforeTax={totalCostBeforeTax}
            removeFromCart={this.removeFromCart}
          />
          {showAlert && (
            <div className="alert alert-danger" role="alert">
              YOU ALREADY ADDED THIS ITEM TO YOUR CART!
              <br />
              <em>Check your cart for multiples</em>
              <br />
            </div>
          )}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home addToCart={this.addToCart} />
              </Route>
              <Route exact path="/Products">
                <Products
                  addToCart={this.addToCart}
                  removeFromCart={this.removeFromCart}
                  selectProduct={this.setSelectedProduct}
                  history={history}
                />
              </Route>
              <Route
                exact
                path="/Products/:id/Show"
                component={ProductShow}
                render={props => (
                  <ProductShow {...props} addToCart={this.addToCart} />
                )}
              />
              <Route
                exact
                path="/ShoppingCart"
                component={Cart}
                render={props => <Cart {...props} />}
              />
            </Switch>
          </div>
          {/* <!-- Footer --> */}
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">
                Copyright &copy; Your Website 2019 NOT A REAL ECOMMERCE SITE DO
                NOT TRY TO PURCHASE
              </p>
            </div>
            {/* <!-- /.container --> */}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;