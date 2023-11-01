const Test = require('@codewars/test-compat');
const mostFrequentItemCount = require('../src/Find Count of Most Frequent Item in an Array')
describe("Find Count of Most Frequent Item in an Array Tests", () => {
    it("mostFrequentItemCount test", () => {
        Test.assertEquals(mostFrequentItemCount([3, -1, -1]), 2);
        Test.assertEquals(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
    });
});