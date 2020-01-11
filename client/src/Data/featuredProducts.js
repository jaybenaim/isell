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
  "TEST",
  "TEST",
  ".01",
  "images/img1.jpg",
  "TEST"
);
const product2 = new Product(
  2,
  "Rick and Morty",
  "Juul Sticker",
  "3.99",
  "images/img2.jpg",
  "Phone Accesories"
);
const product3 = new Product(
  3,
  "Supreme",
  "Juul Sticker",
  "9.99",
  "images/img3.jpg",
  "Phone Accesories"
);
products.push(product1, product2, product3);

export default products;
