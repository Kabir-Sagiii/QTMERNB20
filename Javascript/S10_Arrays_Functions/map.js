var data = ["Raj", "Rohan", "Yash", "Riya", "Samira", "Priya", "Reshma"];

var newAraay = data.map(function (element, index) {
  var newelement = element + "JS";
  return newelement; //["RajJS","RohanJS"]
});

console.log(newAraay);
