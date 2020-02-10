

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
module.exports = flatten;
