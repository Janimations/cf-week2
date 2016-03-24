document.addEventListener('DOMContentLoaded', function() {

  //generate hourly data for each store and write table to sales-data.html

  for (mm=0; mm<stores.length; mm++) {
    stores[mm].getPizzaData();
    stores[mm].startPizzaTable('tables');
    stores[mm].populatePizzaTable();
    console.log(stores[mm].dailyPizzasSold);
  }

  //update counter for 'pizzas served today' on sales-data.html
  var counterEl = document.getElementById("pizza-counter");
  counterEl.textContent = totalPizzasPerDay;

});
