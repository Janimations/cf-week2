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

  //Add up total pizza sales across stores for each hour and store in array hourlyTotals
  var hourlyTotals = [];
  for (rr=1; rr<=18; rr++) {
    var hour = 0;
    for (qq=0; qq<stores.length; qq++) {
      var tableBodyId = stores[qq].name + '-body';
      var body = document.getElementById(tableBodyId);
      var row = body.rows[rr];
      var cell = row.cells[1];
      var childNode = cell.childNodes[0];
      var data = parseInt(childNode.nodeValue);
      hour += data;
    }
    hourlyTotals.push(hour);
  }

  //update counter for 'pizzas served today' on sales-data.html
  var counterEl = document.getElementById("pizza-counter");
  counterEl.textContent = totalPizzasPerDay;

});
