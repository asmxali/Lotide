
const tail = function(array) {
  let newArray = [];
  newArray = array.slice(1);
  console.log(newArray);
};
// original array should still have 3 elements!

module.exports = tail;