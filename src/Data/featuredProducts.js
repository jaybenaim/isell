class Product {
  constructor(id, name, description, price, image, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
  }

  changePrice = newPrice => {
    this.price = newPrice;
    return true;
  };
}
const products = [];
const product1 = new Product(
  1,
  "towel",
  "large",
  "4.99",
  "http://localhost:3000/images/img1.jpg",
  "Phone Accesories"
);
const product2 = new Product(
  2,
  "towel",
  "small",
  "3.99",
  "http://localhost:3000/images/img2.jpg",
  "null"
);
const product3 = new Product(
  3,
  "hockey stick",
  "Small hockey stick for kids",
  "9.99",
  "http://localhost:3000/images/img3.jpg",
  "null"
);
products.push(product1, product2, product3);

export default products;
