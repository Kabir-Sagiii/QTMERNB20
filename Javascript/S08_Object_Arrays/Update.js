var product = {
  pName: "Iphone 16",
  price: 80000,
  rating: 4.5,
  inStock: true,
};

console.log(product);
product.price = 90000;
product["inStock"] = false;
console.log(product);
