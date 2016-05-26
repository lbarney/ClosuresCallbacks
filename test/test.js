/*global
describe, it
*/

var cc = require('../ccPractice');
const chai = require('chai');
var expect = chai.expect;

describe('Closure and Callback Exercises', function () {
  describe('Callback Exercise 1 - Calculator', function () {
    it('should have an add function that adds numbers', function () {
      expect(cc.add(1, 4)).to.eql(5)
      expect(cc.add(100, -1)).to.eql(99)
      expect(cc.add(40, 10)).to.eql(50)
    })
    it('should have an multiply function that multipies numbers', function () {
      expect(cc.multiply(1, 4)).to.eql(4)
      expect(cc.multiply(100, -1)).to.eql(-100)
      expect(cc.multiply(40, 10)).to.eql(400)
    })
    it('should have an subtract function that subtracts numbers', function () {
      expect(cc.subtract(1, 4)).to.eql(-3)
      expect(cc.subtract(100, -1)).to.eql(101)
      expect(cc.subtract(40, 10)).to.eql(30)
    })
    it('should have an divide function that divides numbers', function () {
      expect(cc.divide(1, 4)).to.eql(0.25)
      expect(cc.divide(100, -1)).to.eql(-100)
      expect(cc.divide(40, 10)).to.eql(4)
    })
    it('should have a calculate function that accepts a callback and performs all operations', function () {
      expect(cc.calculate(1, 4, cc.add)).to.eql(5)
      expect(cc.calculate(100, -1, cc.add)).to.eql(99)
      expect(cc.calculate(40, 10, cc.add)).to.eql(50)
      expect(cc.calculate(1, 4, cc.multiply)).to.eql(4)
      expect(cc.calculate(100, -1, cc.multiply)).to.eql(-100)
      expect(cc.calculate(40, 10, cc.multiply)).to.eql(400)
      expect(cc.calculate(1, 4, cc.subtract)).to.eql(-3)
      expect(cc.calculate(100, -1, cc.subtract)).to.eql(101)
      expect(cc.calculate(40, 10, cc.subtract)).to.eql(30)
      expect(cc.calculate(1, 4, cc.divide)).to.eql(0.25)
      expect(cc.calculate(100, -1, cc.divide)).to.eql(-100)
      expect(cc.calculate(40, 10, cc.divide)).to.eql(4)
    })
  })

  describe('Exercise 2 - Reverse Order', function () {
    it("reverseOrder should return a function that reverses the order of a string", function () {
      expect(cc.reverseOrder('A String')).to.eql('gnirtS A')
      expect(cc.reverseOrder('ABC')).to.eql('CBA')
      expect(cc.reverseOrder('')).to.eql('')
    })

    it("userHelp should return a function that reverses the order of a string provided by the user", function () {
      expect(cc.userHelp(cc.reverseOrder, "To be or not to be")).to.eql("eb ot ton ro eb oT")
      expect(cc.userHelp(cc.reverseOrder, "A bird in the hand")).to.eql("dnah eht ni drib A")
      expect(cc.userHelp(cc.reverseOrder, "Killing two birds with one stone")).to.eql("enots eno htiw sdrib owt gnilliK")
    })
  })

  describe('Closures - Exercise 1', function () {
    it("someFunc should return a function that adds it's input to the next", function () {
      expect(cc.someFunc(1)(2)).to.eql(3)
      expect(cc.someFunc(5)(2)).to.eql(7)
      expect(cc.someFunc(6)(2)).to.eql(8)
    })
  })

  describe('Closures - Exercise 2', function () {
    it("someFunc should return a function that adds it's input to the next", function () {
      
      expect(cc.counter()).to.eql(5)
      cc.counter()
      expect(cc.counter()).to.eql(7)
      cc.counter()
      expect(cc.counter()).to.eql(9)
    })
  })
})
