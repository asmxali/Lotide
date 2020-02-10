
const assertArraysEqual = function(actual, expected) {

  let new1 = eqArrays(actual,expected);

  if (new1 === true) {
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

const findKey = function(object,callback) {
  let results = [];
  for (let key of Object.keys(object)) {
    if( callback(object[key]) ) {
      results.push(key);
      return results;
    } 
  }
}

let actual = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

let expected = ['noma'];
assertArraysEqual(actual,expected);
module.exports = findKey;


