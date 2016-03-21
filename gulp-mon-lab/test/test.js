var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 == compute.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 == compute.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(compute.addFive(-1008) == -1003); });

  it('should return 9 because 5 + 4 is 9', function() { assert(9 == compute.sum(5,4)); });
  it('should return 24 because 8 * 3 is 24', function() { assert(24 == compute.multiply(8,3)); });
  it('should return [9,24] because 2+3+4 is 9, and 2*3*4 is 24', function() { assert(9,24 == compute.sumAndMultiply(2,3,4)); });
  it('should return 100 because 10+20+30+40 is 100', function() { assert(100 == compute.sumArray([10,20,30,40])); });

});
