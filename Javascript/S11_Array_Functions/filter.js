var data = [10, 20, 30, 40, 50];

var newFilteredArray = data.filter(function (element, index) {
  return element < 30;
});

console.log(newFilteredArray);
