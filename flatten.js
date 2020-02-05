
const assertArraysEqual = function(actual, expected) {

  let new1 = eqArrays(actual,expected);

  if (new1 === true) {
    return `✅✅✅ Assertion Passed: Original Array ${actual} === ${expected}`;
  } else {
    return `🚫🚫🚫 Assertion Failed: Original array  ${actual} !== ${expected}`;
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

//assertArraysEqual(middle[1, 2, 3], [2]);

const flatten = function(array) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item) === true) {
      for (let items of item) {
        newArray.push(items);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}
console.log(flatten([[1,2,3],3,[2,7],4]));
