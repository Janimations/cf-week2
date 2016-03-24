var totalPizzasPerWeek;

//call getPizzaData function for each store, add all to totalPizzasPerDay, and multiply by 7
function getTotalPizzasPerWeek() {
  for (mm=0; mm<stores.length; mm++) {
    stores[mm].getPizzaData();
  }
  totalPizzasPerWeek = totalPizzasPerDay * 7;
};

getTotalPizzasPerWeek();

//print totalPizzasPerWeek to index.html
var counterEl = document.getElementById("pizza-counter");
counterEl.textContent = totalPizzasPerWeek;
console.log(totalPizzasPerWeek);
