class Product {
  constructor(_id, name, description, price, image, category, qty = 1) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.qty = qty;
  }
}
export default Product;
