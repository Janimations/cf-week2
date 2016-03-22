var assert = require('assert');
var compute = require('../js/compute.js');

describe('Problem 1 Test', function() {

  it('should return 9 because 5 + 4 is 9', function() { assert(9 == compute.sum(5,4)); });
  it('should return 0 because -3 + 3 is 0', function() { assert(0 == compute.sum(-3,3)); });
  it('should return -30 because -20 + (-10) is -30', function() { assert(-30 == compute.sum(-10, -20)); });
  it('should return dogcat because the concatenation of \'dog\' and \'cat\' is dogcat', function() { assert('dogcat' == compute.sum('dog', 'cat')); });

});

describe('Problem 2 Test', function() {

  it('should return 24 because 8 * 3 is 24', function() { assert(24 == compute.multiply(8,3)); });
  it('should return -20 because 4 * (-5) is -20', function() { assert(-20 == compute.multiply(4,-5)); });
  it('should return 45 because (-9) * (-5) is 45', function() { assert(45 == compute.multiply(-9,-5)); });
  it('should return NaN because strings cannot be multiplied', function() { assert(isNaN(compute.multiply('dog', 'cat'))); });

});

describe('Problem 3 Test', function() {

  it('should return [9,24] because 2+3+4 is 9, and 2*3*4 is 24', function() { assert(9,24 == compute.sumAndMultiply(2,3,4)); });
  it('should return [1,42]', function() { assert(9,24 == compute.sumAndMultiply(-2,-3,7)); });
  it('should return NaN because strings cannot be multiplied', function() { assert(isNaN(compute.multiply('dog', 18))); });
});

describe('Problem 4 Test', function() {

  it('should return 100 because 10+20+30+40 is 100', function() { assert(100 == compute.sumArray([10,20,30,40])); });
  it('should return 13 because the sum of all numbers in array is 13', function() { assert(13 == compute.sumArray([-1,-2,-3,19])); });

});

describe('Problem 5 Test', function() {

  it('should return 120 because 2*3*4*5', function() { assert(120 == compute.multiplyArray([2,3,4,5])); });
  it('should return 0 because 0*0*0*0*0 is 0', function() { assert(0 == compute.multiplyArray([0,0,0,0,0])); });
  it('should return 1 because array is empty', function() { assert(1 == compute.multiplyArray([])); });

});
