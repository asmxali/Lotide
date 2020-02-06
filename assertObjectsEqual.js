// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  let new1 = eqObjects(actual,expected);

  if (new1 === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// two objects are equal when:
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object
const eqObjects = function(object1, object2) {
  if( Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }  else {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        if(Array.isArray(object1[key]) === true) {
          return eqArrays(object2[key],object1[key]);
        }
        return false;
      }
    }
  }
  return true;
}

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


const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false