var assert = require('assert');
var compute = require('../js/compute.js');

describe('Test', function() {

  //Test the "isEven" function
  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 5 and 20 because those are the min and max pizzas per hour', function() { assert(5 <= compute.deliveryDataFor(15) && compute.deliveryDataFor(15) <= 20); });
  }
  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 0 and 4 because those are the min and max pizzas per hour', function() { assert(0 <= compute.deliveryDataFor(0) && compute.deliveryDataFor(0) <= 4); });
  }
  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 2 and 15 because those are the min and max pizzas per hour', function() { assert(2 <= compute.deliveryDataFor(7) && compute.deliveryDataFor(7) <= 15); });
  }
  // it('should return false because 5 is not even', function() { assert(false === compute.isEven(5)); });

});
