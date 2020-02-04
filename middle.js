
const assertArraysEqual = function(actual, expected) {

  let new1 = eqArrays(middle(actual),expected);

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

const middle = function(array) {
  if ( array.length > 2) {
    if (array.length % 2 === 0) {
      leftMiddle= array[array.length/2 - 1];
      rightMiddle= array[array.length/2];
      middle1 = [leftMiddle, rightMiddle];
      
    } else if (array.length % 2 === 1) {
      middle1 = array[Math.floor(array.length/2)];
    }  
  } else {
    middle1 = [];
  }
 return middle1;

}

console.log(assertArraysEqual([1,2,3,3,4,5],[3,3]));