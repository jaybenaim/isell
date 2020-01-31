class Product {
  constructor(id, name, description, price, image, category, qty = 1) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.qty = qty;
  }
}
const products = [];

const product1 = new Product(
  "5e2e3e3d50d8891b1cd5d9e4",
  "Louis Vuitton",
  "Juul Sticker",
  "2.00",
  "https://jaybenaim.github.io/isell/images/img4.jpg",
  "Phone Accesories"
);
const product2 = new Product(
  "5e2e3e6d50d8891b1cd5d9e5",
  "Hello",
  "Juul Sticker",
  "2.00",
  "https://jaybenaim.github.io/isell/images/img5.jpg",
  "Phone Accesories"
);
const product3 = new Product(
  "5e2e3ea050d8891b1cd5d9e6",
  "Marble",
  "Juul Sticker",
  "2.00",
  "https://jaybenaim.github.io/isell/images/img6.jpg",
  "Phone Accesories"
);
const product4 = new Product(
  "5e2e3ef050d8891b1cd5d9e7",
  "Juul Holder",
  "Juul Holder, Sticks to anywhere! Reusable!",
  "2.00",
  "https://jaybenaim.github.io/isell/images/img7.jpg",
  "Phone Accesories"
);
const product5 = new Product(
  "5e2e3f2350d8891b1cd5d9e8",
  "Rick and Morty",
  "Juul Sticker",
  "2.00",
  "https://jaybenaim.github.io/isell/images/img8.jpg",
  "Phone Accesories"
);

products.push(product1, product2, product3, product4, product5);

export default products;
