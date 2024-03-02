const chai = require("chai");
const assert = chai.assert;
describe("pisano", function() {
  it("Test Basic", function() {
    assert.equal(pisano(3), 8);
    assert.equal(pisano(4), 6);
    assert.equal(pisano(5), 20);
    assert.equal(pisano(6), 24);
    assert.equal(pisano(7), 16);
    assert.equal(pisano(8), 12);
    assert.equal(pisano(9), 24);
    assert.equal(pisano(10), 60);   
  });
});
