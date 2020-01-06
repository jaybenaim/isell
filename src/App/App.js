import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../Products/Products";
import Home from "../Home/Home";
import ProductShow from "../Products/ProductShow";
import "./App.css";

function App() {
  return (
    <Router basename="/isell">
      <div className="App">
        <Nav />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Products">
              <Products />
            </Route>
            <Route exact path="/Products/:id/Show" component={ProductShow}>
              <ProductShow />
            </Route>
          </Switch>
        </div>
        {/* <!-- Footer --> */}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2019
            </p>
          </div>
          {/* <!-- /.container --> */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
