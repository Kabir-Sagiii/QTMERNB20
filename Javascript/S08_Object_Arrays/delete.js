var product = {
  pName: "Iphone 16",
  price: 80000,
  rating: 4.5,
  inStock: true,
};

console.log(product);

delete product.rating;
delete product["inStock"];
console.log(product);
