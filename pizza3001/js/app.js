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

function createPizzaTable(title, id) {
  var newTable = document.createElement('table');
  newTable.setAttribute('id', id);
  var bodyEl = document.getElementsByTagName('body')[0];
  bodyEl.appendChild(newTable);
  var newTableRow = document.createElement('tr');
  newTable.appendChild(newTableRow);

  var headings = ['Hour', 'Pizzas', 'Deliveries', 'Drivers'];

  for (jj=0; jj<headings.length; jj++) {
    var tableHeading = document.createElement('th');
    newTableRow.appendChild(tableHeading);
    var headingText = document.createTextNode(headings[jj]);
    tableHeading.appendChild(headingText);
  }
}

var getBody = document.getElementsByTagName('body')[0];
var h2new = document.createElement('h2');
var h2text = document.createTextNode(__LOCATION__);
h2new.appendChild(h2text);
getBody.appendChild(h2new);


createPizzaTable('BEAVERTON', 'beaverton');

// function createAndPlaceEl(element, text, parentEl, position) {
//   var newEl = document.createElement(element);
//   var newText = document.createTextNode(text);
//   newEl.appendChild(newText);
//   var position = document.getElementsByTagName(parentEl)[position];
//   position.appendChild(newEl);
// }

//CREATE FUNCTION TO CREATE ELEMENT AND PLACE IT IN DOM TREE. ADD FOR LOOP TO LOOP THROUGH STORES AND USE THAT FUNCTION TO PRINT NAMES AND DELIVERY DATA (message VARIABLE IN ABOVE OBJECTS) TO PAGE IN LIST FORM. - DUCKETT P. 223!!!!

console.log(store1.name);
store1.deliveryData();

});
