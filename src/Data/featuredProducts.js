class Product {
  constructor(id, name, description, price, image, category, qty = 1) {
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
  "5e2e3d8d50d8891b1cd5d9e1",
  "Gucci",
  "Juul Sticker",
  "2.53",
  "https://jaybenaim.github.io/isell/images/img1.jpg",
  "TEST"
);
const product2 = new Product(
  "5e2e3dde50d8891b1cd5d9e2",
  "Rick and Morty",
  "Juul Sticker",
  "2.00",
  "https://jaybenaim.github.io/isell/images/img2.jpg",
  "Phone Accesories"
);
const product3 = new Product(
  "5e2e3e1450d8891b1cd5d9e3",
  "Supreme",
  "Juul Sticker",
  "2.00",
  "https://jaybenaim.github.io/isell/images/img3.jpg",
  "Phone Accesories"
);
products.push(product1, product2, product3);

export default products;
