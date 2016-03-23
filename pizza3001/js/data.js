document.addEventListener('DOMContentLoaded', function() {

  store1.pizzaTable();
  store2.pizzaTable();
  store3.pizzaTable();
  store4.pizzaTable();
  store5.pizzaTable();
  store6.pizzaTable();

  var counterEl = document.getElementById("pizza-counter");
  counterEl.textContent = totalPizzasPerDay;
  console.log(totalPizzasPerDay);

});
