class Product {
  constructor(id, name, description, price, image, category, qty = 2) {
    this.id = id;
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
  10001,
  "Gucci",
  "Juul Sticker",
  "2.00",
  "images/img1.jpg",
  "TEST"
);
const product2 = new Product(
  10002,
  "Rick and Morty",
  "Juul Sticker",
  "2.00",
  "images/img2.jpg",
  "Phone Accesories"
);
const product3 = new Product(
  10003,
  "Supreme",
  "Juul Sticker",
  "2.00",
  "images/img3.jpg",
  "Phone Accesories"
);
products.push(product1, product2, product3);

export default products;
