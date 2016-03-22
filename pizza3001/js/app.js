var exports = {};

document.addEventListener('DOMContentLoaded', function() {

var store1 = {
  name: 'Beaverton',
  deliveryData: function() {
    for (ii=0; ii<marketData.length; ii++) {
      var time = marketData[ii].time;
      var pizzasThisHour = pizzasDuringHour(ii);
      var deliveriesThisHour = deliveriesDuringHour(ii);
      var driversThisHour = driversDuringHour(ii);
      var message = time + ': ' + pizzasThisHour + ' pizzas, ' + deliveriesThisHour + ' deliveries -- drivers recommended: ' + driversThisHour + '.';
      console.log(message);
    }
  }
};

var store2 = {
  name: 'Hillsboro',
  deliveryData: function() {
    for (ii=0; ii<marketData.length; ii++) {
      var time = marketData[ii].time;
      var pizzasThisHour = pizzasDuringHour(ii);
      var deliveriesThisHour = deliveriesDuringHour(ii);
      var driversThisHour = driversDuringHour(ii);
      var message = time + ': ' + pizzasThisHour + ' pizzas, ' + deliveriesThisHour + ' deliveries -- drivers recommended: ' + driversThisHour + '.';
      console.log(message);
    }
  }
};

var store3 = {
  name: 'Downtown',
  deliveryData: function() {
    for (ii=0; ii<marketData.length; ii++) {
      var time = marketData[ii].time;
      var pizzasThisHour = pizzasDuringHour(ii);
      var deliveriesThisHour = deliveriesDuringHour(ii);
      var driversThisHour = driversDuringHour(ii);
      var message = time + ': ' + pizzasThisHour + ' pizzas, ' + deliveriesThisHour + ' deliveries -- drivers recommended: ' + driversThisHour + '.';
      console.log(message);
    }
  }
};

var store4 = {
  name: 'Northeast',
  deliveryData: function() {
    for (ii=0; ii<marketData.length; ii++) {
      var time = marketData[ii].time;
      var pizzasThisHour = pizzasDuringHour(ii);
      var deliveriesThisHour = deliveriesDuringHour(ii);
      var driversThisHour = driversDuringHour(ii);
      var message = time + ': ' + pizzasThisHour + ' pizzas, ' + deliveriesThisHour + ' deliveries -- drivers recommended: ' + driversThisHour + '.';
      console.log(message);
    }
  }
};

var store5 = {
  name: 'Clackamas',
  deliveryData: function() {
    for (ii=0; ii<marketData.length; ii++) {
      var time = marketData[ii].time;
      var pizzasThisHour = pizzasDuringHour(ii);
      var deliveriesThisHour = deliveriesDuringHour(ii);
      var driversThisHour = driversDuringHour(ii);
      var message = time + ': ' + pizzasThisHour + ' pizzas, ' + deliveriesThisHour + ' deliveries -- drivers recommended: ' + driversThisHour + '.';
      console.log(message);
    }
  }
};

var store6 = {
  name: 'PDX-Airport',
  deliveryData: function() {
    for (ii=0; ii<marketData.length; ii++) {
      var time = marketData[ii].time;
      var pizzasThisHour = pizzasDuringHour(ii);
      var deliveriesThisHour = deliveriesDuringHour(ii);
      var driversThisHour = driversDuringHour(ii);
      var message = time + ': ' + pizzasThisHour + ' pizzas, ' + deliveriesThisHour + ' deliveries -- drivers recommended: ' + driversThisHour + '.';
      console.log(message);
    }
  }
};

//IN COMPUTE.JS, CREATE FUNCTION TO CREATE ELEMENT AND PLACE IT IN DOM TREE. ADD FOR LOOP TO LOOP THROUGH STORES AND USE THAT FUNCTION TO PRINT NAMES AND DELIVERY DATA (message VARIABLE IN ABOVE OBJECTS) TO PAGE IN LIST FORM. - DUCKETT P. 223!!!!

console.log(store1.name);
store1.deliveryData();

});
