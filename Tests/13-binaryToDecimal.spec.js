const { expect } = require('chai')
const BinaryToDecimal = require('../Ejercicios/Extras/13-BinaryToDecimal/BinaryToDecimal')

describe('BinaryToDecimal', function () {
  it("should return 2 when called with '10'", function () {
    expect(BinaryToDecimal('10')).to.equal(2)
  })
  it("should return 7 when called with '111'", function () {
    expect(BinaryToDecimal('111')).to.equal(7)
  })
})
