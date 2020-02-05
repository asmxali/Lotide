const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// two objects are equal when:
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object
const eqObjects = function(object1, object2) {
  let object1Length=0;
  let object2Length=0;
  for (let key of Object.keys(object1)) {
    object1Length +=1;
  }
  for (let key of Object.keys(object2)) {
    object2Length +=1;
  }
  if(object1Length !== object2Length) {
    return false;
  } else {
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
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false