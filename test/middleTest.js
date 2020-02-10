const middle = require("../middle");
const assert = require("chai").assert




describe("#middle", () => {
  it("returns middle elements (3,3) of array (1,2,3,3,4,5) ", () => {
    assert.deepEqual(middle([1,2,3,3,4,5]),[3,3])
  })
});