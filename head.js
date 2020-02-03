const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// // TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1,2);
const head = function(array) {
  return array[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");