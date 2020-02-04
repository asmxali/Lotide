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
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (firstArray, secondArray) {
  let count =0;
  for (let i = 0; i <=firstArray.length-1; i ++) {
    if (firstArray[i] === secondArray[i]) {
      count +=1;
    }
  }
  if (count === firstArray.length) {
    return true;
  } else {
    return false;
  }
}
// TEST CODE()
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1,2);

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);