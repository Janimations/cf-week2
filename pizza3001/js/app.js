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

console.log(store1.name);
store1.deliveryData();

//For testing functions
// pizzasDuringHour(7);
// deliveriesDuringHour(7);
// driversDuringHour(7);

});
