// FUNCTION IMPLEMENTATION
const sum = function(a, b) {
  return a + b;
};
sum(1,2);
// console.log(sum(1,2)); //prints using node
// // TEST CODE
// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]");
  } else {
    console.log(" 🚫🚫🚫 Assertion Failed: [actual] !== [expected]");
  }
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1,2);