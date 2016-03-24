document.addEventListener('DOMContentLoaded', function() {

  for (mm=0; mm<stores.length; mm++) {
    stores[mm].getPizzaData();
    stores[mm].startPizzaTable('tables');
    stores[mm].populatePizzaTable();
  }

  // var counterEl = document.getElementById("pizza-counter");
  // counterEl.textContent = totalPizzasPerDay;
  // console.log(totalPizzasPerDay);

});
