

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

module.exports = middle;