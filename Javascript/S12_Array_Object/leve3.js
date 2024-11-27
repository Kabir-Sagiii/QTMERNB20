var data = {
  name: {
    first: "Raj",
    last: "Verma",
    nickNames: ["bunny", "sunny", "tamudu", "chinna"],
  },
};

console.log(data.name.nickNames[2]);

data.name.nickNames.push("anna");

console.log(data.name.nickNames);
