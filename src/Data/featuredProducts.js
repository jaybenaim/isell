class Product {
  constructor(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
  id = () => {
    return this.id;
  };
  name = () => {
    return this.name;
  };
  description = () => {
    return this.description;
  };
  price = () => {
    return this.price;
  };
  changePrice = newPrice => {
    this.price = newPrice;

    return true;
  };
}
const products = [];

const product1 = new Product(1, "towel", "large", "4.99");
const product2 = new Product(2, "towel", "small", "3.99");
const product3 = new Product(
  3,
  "hockey stick",
  "Small hockey stick for kids",
  "9.99"
);
products.push(product1, product2, product3);

export default products;
