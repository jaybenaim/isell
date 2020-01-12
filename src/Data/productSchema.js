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
export default Product;
