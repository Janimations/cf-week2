var assert = require('assert');
var compute = require('../js/compute.js');

describe('Test pizzasDuringHour', function() {

  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 5 and 20 because those are the min and max pizzas per hour', function() { assert(5 <= compute.pizzasDuringHour(15) && compute.pizzasDuringHour(15) <= 20); });
  }
  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 0 and 4 because those are the min and max pizzas per hour', function() { assert(0 <= compute.pizzasDuringHour(0) && compute.pizzasDuringHour(0) <= 4); });
  }
  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 2 and 15 because those are the min and max pizzas per hour', function() { assert(2 <= compute.pizzasDuringHour(7) && compute.pizzasDuringHour(7) <= 15); });
  }

});

describe('Test deliveriesDuringHour', function() {

  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 6 and 11 because those are the min and max pizzas per hour', function() { assert(6 <= compute.deliveriesDuringHour(15) && compute.deliveriesDuringHour(15) <= 11); });
  }
  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 0 and 4 because those are the min and max pizzas per hour', function() { assert(0 <= compute.deliveriesDuringHour(0) && compute.deliveriesDuringHour(0) <= 4); });
  }
  for (var jj=0; jj<1000; jj++) {
    it('should return a number between 1 and 4 because those are the min and max pizzas per hour', function() { assert(1 <= compute.deliveriesDuringHour(7) && compute.deliveriesDuringHour(7) <= 4); });
  }

});
