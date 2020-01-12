class Product {
  constructor(id, name, description, price, image, category, qty) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.qty = 0;
  }

  changePrice = newPrice => {
    this.price = newPrice;
    return true;
  };
}
const products = [];
const product1 = new Product(
  1,
  "Gucci",
  "Juul Sticker",
  "2.00",
  "images/img1.jpg",
  "TEST"
);
const product2 = new Product(
  2,
  "Rick and Morty",
  "Juul Sticker",
  "2.00",
  "images/img2.jpg",
  "Phone Accesories"
);
const product3 = new Product(
  3,
  "Supreme",
  "Juul Sticker",
  "2.00",
  "images/img3.jpg",
  "Phone Accesories"
);
products.push(product1, product2, product3);

export default products;
