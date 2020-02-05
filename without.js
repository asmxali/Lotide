
const assertArraysEqual = function(actual, expected) {

  let new1 = eqArrays(without(actual),expected);

  if (new1 === true) {
    return ` ✅✅✅ Assertion Passed: Middle of ${actual} === ${expected}`;
  } else {
    retrun ` 🚫🚫🚫 Assertion Failed: Middle of ${actual} !== ${expected}`;
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

const without = function(array,removedValue) {

  for (let i=0; i< array.length; i++) {
      for (let j=0; j<= removedValue.length; j++) {
        if (array[i] === removedValue[j]) {
        array.splice(i,1); // returns the removed index
      }
    }
  }
  return array;
}

console.log(without([1,2,5,6],[2]));