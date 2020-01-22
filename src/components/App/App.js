import React, { Component } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Products from "../Products/Products";
import { createBrowserHistory } from "history";
import Home from "../Home/Home";
import ProductShow from "../Products/ProductShow";
import Cart from "../Cart/Cart";
import Login from "../Register/Login";
import Signup from "../Register/Signup";
import "./App.css";
import Product from "../../Data/productSchema";
import Cookies from "js-cookie";
import ProtectedRoute from "../Register/ProtectedRoute";
import ProfileForm from "../Profile/ProfileForm";
import local from "../../Api/local";
import { connect } from "react-redux";
import { addItem as addItemToCart } from "../../redux/actions";

const history = createBrowserHistory();
const { token } = Cookies.get();

class App extends Component {
  state = {
    isLoggedIn: token === undefined ? false : true,
    // cartQty: 0,
    // cartItems: [],
    totalCostBeforeTax: 0,
    selectedProduct: null,
    addedToCart: false,
    valid: false,
    showAlert: false
  };
  calculateTotalBeforeTax = total => {
    total = Number(total).toFixed(2);
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
  // removeFromCart = id => {
  //   const { cartItems } = this.state;
  //   const item = cartItems.filter(item =>
  //     item.id === id ? item : "No items in cart"
  //   );
  //   this.calculateTotalBeforeTax(-item[0].price);

  //   this.setState(prevState => {
  //     return {
  //       cartItems: [
  //         ...prevState.cartItems.filter(item =>
  //           item.id !== id ? item.id : null
  //         )
  //       ],
  //       cartQty: (prevState.cartQty -= prevState.cartQty >= 1 ? 1 : 0)
  //     };
  //   });

  //   return cartItems.qty <= 1 ? (
  //     <Redirect to={{ pathname: "/" }} />
  //   ) : (
  //     <Redirect to={{ pathname: "/ShoppingCar", state: { cart: cartItems } }} />
  //   );
  // };
  // addToCart = (qty, item) => {
  //   this.checkIfItemIsInCart(item);
  //   const { addedToCart } = this.state;
  //   const { id, name, description, price, image, category } = item;
  //   const items = [];

  //   for (let i = 1; i <= qty; i++) {
  //     this.calculateTotalBeforeTax(price);
  //   }

  //   items.push(new Product(id, name, description, price, image, category, qty));
  //   this.setState(prevState => {
  //     return {
  //       cartQty: (prevState.cartQty += qty),
  //       cartItems: [...prevState.cartItems, ...items],
  //       addedToCart: !addedToCart
  //     };
  //   });
  // };
  setSelectedProduct = product => {
    this.setState({ selectProduct: product });
  };
  toggleAlert = () => {
    const { showAlert } = this.state;
    this.setState({ showAlert: !showAlert });
  };
  handleLogin = token => {
    this.setState({
      isLoggedIn: token ? true : false
    });
  };

  render() {
    const {
      // cartItems,
      // cartQty,
      totalCostBeforeTax,
      showAlert,
      isLoggedIn
    } = this.state;
    const { items, qty } = this.props.cart;
    return (
      <Router basename="/isell" history={history}>
        <div className="App">
          <Nav
            cart={{ qty, items }}
            totalCostBeforeTax={totalCostBeforeTax}
            removeFromCart={this.removeFromCart}
            isLoggedIn={isLoggedIn}
            handleLogin={this.handleLogin}
          />

          {showAlert && (
            <div className="alert alert-danger" role="alert">
              <button
                className="btn-danger alert-close-btn"
                onClick={() => this.toggleAlert()}
              >
                X
              </button>
              <br />
              YOU ALREADY ADDED THIS ITEM TO YOUR CART!
              <br />
              <em>Check your cart for multiples</em>
              <br />
            </div>
          )}
          {/* <Link to={{ pathname: "/profiles/new", state: { text: "hello" } }}>
            NEW PROFILE
          </Link> */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                {/* grab add from redux in home */}
                <Home addToCart={addItemToCart} isLoggedIn={isLoggedIn} />
              </Route>
              <Route
                exact
                path="/login"
                render={props => (
                  <Login {...props} handleLogin={this.handleLogin} />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <Signup {...props} handleLogin={this.handleLogin} />
                )}
              />

              <Route
                exact
                path="/Products"
                render={props => (
                  <Products
                    {...props}
                    addToCart={addItemToCart}
                    removeFromCart={this.removeFromCart}
                    selectProduct={this.setSelectedProduct}
                  />
                )}
              />

              <Route
                exact
                path="/Products/:id/Show"
                component={ProductShow}
                render={props => (
                  <ProductShow {...props} addToCart={addItemToCart} />
                )}
              />

              <ProtectedRoute path="/ShoppingCart" isLoggedIn={isLoggedIn}>
                <Route
                  exact
                  path="/ShoppingCart"
                  component={Cart}
                  render={props => (
                    <Cart
                      {...props}
                      timestamp={new Date().toString()}
                      removeFromCart={this.removeFromCart}
                      items={items}
                    />
                  )}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/profiles/new" isLoggedIn={isLoggedIn}>
                <Route
                  exact
                  path="/profiles/new"
                  render={props => <ProfileForm {...props} />}
                />
              </ProtectedRoute>
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
const mapStateToProps = (state, ownProps) => {
  const cart = { items: state.items, qty: state.qty };
  return { cart };
};

export default connect(mapStateToProps, { addItemToCart })(App);
