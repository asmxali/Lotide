const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
let results = {};
  for(let item of string) {
    results[item] = (results[item] || 0) + 1 ;
  }
  return results;
}
console.log(countLetters('asma is here'))
module.exports = countLetters;