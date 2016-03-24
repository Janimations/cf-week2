document.addEventListener('DOMContentLoaded', function() {

  //generate hourly data for each store and write table to sales-data.html

  for (mm=0; mm<stores.length; mm++) {
    //generate random pizza data and build and print tables to sales-data.html
    stores[mm].getPizzaData();
    stores[mm].startPizzaTable('tables');
    stores[mm].populatePizzaTable();

    //add weekly location data to weekly data table in sales-data.html
    

  }

  //update counter for 'pizzas served today' on sales-data.html
  var counterEl = document.getElementById("pizza-counter");
  counterEl.textContent = totalPizzasPerDay;

});
