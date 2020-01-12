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
export default Product;
