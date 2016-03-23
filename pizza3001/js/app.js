var exports = {};

document.addEventListener('DOMContentLoaded', function() {

function createPizzaTable(title, tableId) {
  //Create h2 and first row and insert both into page
  var bodyEl = document.getElementsByTagName('body')[0];
  var h2new = document.createElement('h2');
  var h2text = document.createTextNode(title);
  h2new.appendChild(h2text);
  bodyEl.appendChild(h2new);
  var newTable = document.createElement('table');
  newTable.setAttribute('id', tableId);
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

  var pizzaTable = document.getElementById(tableId);

  for (ii=0; ii<marketData.length; ii++) {
    //Generate random data from marketData
    var time = marketData[ii].time;
    var pizzasThisHour = pizzasDuringHour(ii);
    var deliveriesThisHour = deliveriesDuringHour(ii);
    var driversThisHour = driversDuringHour(ii);
    //store random data in array
    var thisHourInfo = [time, pizzasThisHour, deliveriesThisHour, driversThisHour];
    //Make new row for each hour's random data array
    var newTableRow = document.createElement('tr');
    for (kk=0; kk<thisHourInfo.length; kk++) {
      var newTableCell = document.createElement('td');
      var tdText = document.createTextNode(thisHourInfo[kk]);
      newTableCell.appendChild(tdText);
      newTableRow.appendChild(newTableCell);
    }
    //Append each hour's row to pizzaTable
    pizzaTable.appendChild(newTableRow);
  }
};

var store1 = {
  name: 'Beaverton',
  pizzaTable: function() {
    createPizzaTable(this.name, this.name.toLowerCase())
  }
};

var store2 = {
  name: 'Hillsboro',
  pizzaTable: function() {
    createPizzaTable(this.name, this.name.toLowerCase())
  }
};

var store3 = {
  name: 'Downtown',
  pizzaTable: function() {
    createPizzaTable(this.name, this.name.toLowerCase())
  }
};

var store4 = {
  name: 'Northeast',
  pizzaTable: function() {
    createPizzaTable(this.name, this.name.toLowerCase())
  }
};

var store5 = {
  name: 'Clackamas',
  pizzaTable: function() {
    createPizzaTable(this.name, this.name.toLowerCase())
  }
};

var store6 = {
  name: 'PDX-Airport',
  pizzaTable: function() {
    createPizzaTable(this.name, this.name.toLowerCase())
  }
};

store1.pizzaTable();
store2.pizzaTable();
store3.pizzaTable();
store4.pizzaTable();
store5.pizzaTable();
store6.pizzaTable();

});
