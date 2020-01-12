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
  "Louis Vuitton",
  "Juul Sticker",
  "9.99",
  "images/img4.jpg",
  "Phone Accesories"
);
const product2 = new Product(
  2,
  "Hello",
  "Juul Sticker",
  "3.99",
  "images/img5.jpg",
  "Phone Accesories"
);
const product3 = new Product(
  3,
  "Marble",
  "Juul Sticker",
  "9.99",
  "images/img6.jpg",
  "Phone Accesories"
);
const product4 = new Product(
  4,
  "Juul Holder",
  "Juul Holder, Sticks to anywhere! Reusable!",
  "12.99",

  "images/img7.jpg",
  "Phone Accesories"
);
const product5 = new Product(
  5,
  "Rick and Morty",
  "Juul Sticker",
  "9.99",
  "images/img8.jpg",
  "Phone Accesories"
);

products.push(product1, product2, product3, product4, product5);

export default products;
