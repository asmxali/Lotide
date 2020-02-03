const assertEqual = function(arrayLength, expectedLength) {
  if (arrayLength === expectedLength) {
    console.log(` ✅✅✅ Assertion Passed: ${arrayLength} === ${expectedLength}`);
  } else {
    console.log(` 🚫🚫🚫 Assertion Failed: ${arrayLength} !== ${expectedLength}`);
  }
};
const tail = function(array) {
  let newArray = [];
  newArray = array.slice(1);
  console.log(newArray);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!