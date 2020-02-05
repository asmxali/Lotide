
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

const without = function(array,removedValue) {
  let result =  array.filter (word => word != removedValue);
  console.log("Removing ", removedValue, "changes the array to " , result);
}
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
