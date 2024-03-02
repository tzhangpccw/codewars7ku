const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const flattenAndSort = require('../src/Flatten and sort an array')

describe("Flatten and sort an array test cases", function () {
    it("Flatten and sort an array tests", function () {
        assert.deepEqual(flattenAndSort([]), []);
        assert.deepEqual(flattenAndSort([[], []]), []);
        assert.deepEqual(flattenAndSort([[], [1]]), [1]);
        assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
    });
});