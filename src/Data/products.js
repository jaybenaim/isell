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
  "http://localhost:3000/images/img4.jpg",
  "Phone Accesories"
);
const product2 = new Product(
  2,
  "towel",
  "small",
  "3.99",
  "http://localhost:3000/images/img5.jpg",
  "null"
);
const product3 = new Product(
  3,
  "hockey stick",
  "Small hockey stick for kids",
  "9.99",

  "http://localhost:3000/images/img6.jpg",
  "null"
);
const product4 = new Product(
  4,
  "Juul Skins",
  "Jull stickers",
  "12.99",

  "http://localhost:3000/images/img7.jpg",
  "null"
);
const product5 = new Product(
  5,
  "Painting",
  "city painting",
  "120.00",

  "http://localhost:3000/images/img8.jpg",
  "null"
);

products.push(product1, product2, product3, product4, product5);

export default products;
