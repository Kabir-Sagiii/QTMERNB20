var obj = {
  name: "yash",
  gender: "male",
  address: {
    city: "hyd",
    state: "TS",
  },
};

//Nested Object
console.log(obj.address.city);
console.log(obj["address"]["state"]);
