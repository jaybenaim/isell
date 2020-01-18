import React from "react";
import { create } from "react-test-renderer";
import App from "../App/App";
import Cookies from "js-cookie";

describe("app with login and protected routes", () => {
  test("Matches the snapshot", () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});

// STATE checks
describe("isLoggedIn state in app is a boolean and not displaying token", () => {
  test("isLoggedIn is a boolen", () => {
    const cookie = Cookies.get("token");
    const app = create(<App isLoggedIn={cookie} />);
    const instance = app.getInstance();
    expect(typeof instance.state.isLoggedIn === "boolean").toBeTruthy();
  });
});

// calculateTotalCostBeforeTax()
describe("calculateTotalCostBeforTax() sets totalCostBeforeTax to a decimal no greater than 2 points ", () => {
  test("totalCostBeforeTax state from app", () => {
    const totalCostBeforeTax = 34.4444322;
    const finalState = 34.44;
    const app = create(<App totalCostBeforeTax={0} />);
    const instance = app.getInstance();

    instance.calculateTotalBeforeTax(totalCostBeforeTax);

    expect(instance.state.totalCostBeforeTax).toBe(finalState);
  });
});

// addToCart()
describe("add item to state when clicking addToCart", () => {
  test("add one item to cart", () => {
    const app = create(<App cartItems={[]} />);
    const instance = app.getInstance();
    const item = {
      id: 1,
      name: "test",
      price: 4.99,
      image: "https://jaybenaim.github.io/isell/images/img4.jpg",
      description: "test description",
      category: "misc",
      qty: 1
    };
    instance.addToCart(1, item);

    expect(instance.state.cartItems).toStrictEqual(
      expect.objectContaining([item])
    );
  });
});
describe("addToCart increases qty of items", () => {
  test("increase the qty according to the param", () => {
    const app = create(<App cartQty={0} />);
    const instance = app.getInstance();
    const item = {
      id: 1,
      name: "test",
      price: 4.99,
      image: "https://jaybenaim.github.io/isell/images/img4.jpg",
      description: "test description",
      category: "misc",
      qty: 1
    };
    const qty = 4;
    instance.addToCart(qty, item);
    expect(instance.state.cartQty).toStrictEqual(qty);
  });
});

// ALERT TOGGLER
describe("toggleAlert function", () => {
  test("hides alert message", () => {
    const app = create(<App />);
    const instance = app.getInstance();

    instance.toggleAlert(); // show
    instance.toggleAlert(); // hide

    expect(instance.state.showAlert).toBeFalsy();
  });
});
