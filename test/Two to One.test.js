const chai = require('chai')
const longest = require('../src/Two to One')


describe("Two to One longest", function () {
    it("Two to One Basic tests", function () {
        chai.assert.deepEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        chai.assert.deepEqual(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        chai.assert.deepEqual(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    })
})

