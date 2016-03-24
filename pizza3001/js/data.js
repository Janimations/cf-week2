document.addEventListener('DOMContentLoaded', function() {

  //generate hourly data for each store and write table to sales-data.html

  for (mm=0; mm<stores.length; mm++) {
    //generate random pizza data and build and print tables to sales-data.html
    stores[mm].getPizzaData();
    stores[mm].startPizzaTable('tables');
    stores[mm].populatePizzaTable();

    //add weekly location data to weekly data table in sales-data.html
    var rowId = stores[mm].name + '-week-total';
    createTr(rowId, 'weekly-sales');
    var dataContent = stores[mm].name.toUpperCase();
    createTd(rowId, dataContent);
    var weekTotal = stores[mm].weeklyPizzasSold;
    createTd(rowId, weekTotal);
  }

  var table = document.getElementById('beaverton-body');
  var row = table.rows[1];
  console.log(row);
  // var cell = row.cells[1];
  // var childNode = cell.childNodes[0];
  // var data = childNode.nodeValue;
  // console.log('cell contents: ');
  // console.log(data);

  //update counter for 'pizzas served today' on sales-data.html
  var counterEl = document.getElementById("pizza-counter");
  counterEl.textContent = totalPizzasPerDay;

});
