function f1(x) {
  console.log("f1 is called");
  x();
}

function f2() {
  console.log("f2 is called");
}

f1(f2);

f1(function () {
  console.log("Anonymous function is called");
});
