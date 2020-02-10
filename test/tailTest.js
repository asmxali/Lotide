const assert = require("chai").assert
const tail = require("../tail");



describe("#head", () => {
  it("returns tail(2,3) of array (1,2,3) ", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  })
});