//Array of objects for market data; each object represents an hour
var marketData = [
  {
    'time': '8:00',
    'minPizzasPerHour': 0,
    'maxPizzasPerHour': 4,
    'minDlvryPerHour': 0,
    'maxDlvryPerHour': 4
  },
  {
    'time': '9:00',
    'minPizzasPerHour': 0,
    'maxPizzasPerHour': 4,
    'minDlvryPerHour': 0,
    'maxDlvryPerHour': 4
  },
  {
    'time': '10:00',
    'minPizzasPerHour': 0,
    'maxPizzasPerHour': 4,
    'minDlvryPerHour': 0,
    'maxDlvryPerHour': 4
  },
  {
    'time': '11:00',
    'minPizzasPerHour': 0,
    'maxPizzasPerHour': 7,
    'minDlvryPerHour': 0,
    'maxDlvryPerHour': 4
  },
  {
    'time': '12:00',
    'minPizzasPerHour': 0,
    'maxPizzasPerHour': 7,
    'minDlvryPerHour': 0,
    'maxDlvryPerHour': 4
  },
  {
    'time': '13:00',
    'minPizzasPerHour': 0,
    'maxPizzasPerHour': 7,
    'minDlvryPerHour': 0,
    'maxDlvryPerHour': 4
  },
  {
    'time': '14:00',
    'minPizzasPerHour': 2,
    'maxPizzasPerHour': 15,
    'minDlvryPerHour': 1,
    'maxDlvryPerHour': 4
  },
  {
    'time': '15:00',
    'minPizzasPerHour': 2,
    'maxPizzasPerHour': 15,
    'minDlvryPerHour': 1,
    'maxDlvryPerHour': 4
  },
  {
    'time': '16:00',
    'minPizzasPerHour': 2,
    'maxPizzasPerHour': 15,
    'minDlvryPerHour': 1,
    'maxDlvryPerHour': 4
  },
  {
    'time': '17:00',
    'minPizzasPerHour': 15,
    'maxPizzasPerHour': 35,
    'minDlvryPerHour': 3,
    'maxDlvryPerHour': 8
  },
  {
    'time': '18:00',
    'minPizzasPerHour': 15,
    'maxPizzasPerHour': 35,
    'minDlvryPerHour': 3,
    'maxDlvryPerHour': 8
  },
  {
    'time': '19:00',
    'minPizzasPerHour': 15,
    'maxPizzasPerHour': 35,
    'minDlvryPerHour': 3,
    'maxDlvryPerHour': 8
  },
  {
    'time': '20:00',
    'minPizzasPerHour': 12,
    'maxPizzasPerHour': 31,
    'minDlvryPerHour': 5,
    'maxDlvryPerHour': 12
  },
  {
    'time': '21:00',
    'minPizzasPerHour': 12,
    'maxPizzasPerHour': 31,
    'minDlvryPerHour': 5,
    'maxDlvryPerHour': 12
  },
  {
    'time': '22:00',
    'minPizzasPerHour': 12,
    'maxPizzasPerHour': 31,
    'minDlvryPerHour': 5,
    'maxDlvryPerHour': 12
  },
  {                                     //[15]
    'time': '23:00',
    'minPizzasPerHour': 5,
    'maxPizzasPerHour': 20,
    'minDlvryPerHour': 6,
    'maxDlvryPerHour': 11
  },
  {
    'time': '00:00',
    'minPizzasPerHour': 5,
    'maxPizzasPerHour': 20,
    'minDlvryPerHour': 6,
    'maxDlvryPerHour': 11
  },
  {
    'time': '01:00',
    'minPizzasPerHour': 5,
    'maxPizzasPerHour': 20,
    'minDlvryPerHour': 6,
    'maxDlvryPerHour': 11
  }
];

function randomWithinRange(min, max) {
  var randomNumber = Math.floor(Math.random() * (max-min+1) + min);
  return randomNumber;
}

var pizzasPerHour = 0;
function pizzasDuringHour(arrayIndex) {
  pizzasPerHour = randomWithinRange(marketData[arrayIndex].minPizzasPerHour, marketData[arrayIndex].maxPizzasPerHour);
  // var message = 'Pizzas per hour for ' + marketData[arrayIndex].time + ': ' + pizzasPerHour;
  // console.log(message);
  return pizzasPerHour;
}
exports.pizzasDuringHour = pizzasDuringHour;

var deliveriesPerHour = 0;
function deliveriesDuringHour(arrayIndex) {
  if (pizzasPerHour > 0) {
    deliveriesPerHour = randomWithinRange(marketData[arrayIndex].minDlvryPerHour, marketData[arrayIndex].maxDlvryPerHour);
    if (deliveriesPerHour > pizzasPerHour) {
      deliveriesPerHour -= (deliveriesPerHour-pizzasPerHour);
    }
  }
  // var message = 'Deliveries per hour for ' + marketData[arrayIndex].time + ': ' + deliveriesPerHour;
  // console.log(message);
  return deliveriesPerHour;
}
exports.deliveriesDuringHour = deliveriesDuringHour;

function driversDuringHour(arrayIndex) {
  var driversNeeded;
  var deliveries = deliveriesPerHour;
  var remainder = deliveries%3;
  if (deliveries === 0) {
    driversNeeded = 0;
  } else if (remainder === 0) {
      driversNeeded = deliveries/3;
    } else {
        driversNeeded = Math.floor(deliveries/3) + 1;
    }
  // var message = 'Recommended drivers for the hour beginning ' + marketData[arrayIndex].time + ': ' + driversNeeded;
  // console.log(message);
  return driversNeeded;
}
exports.driversDuringHour = driversDuringHour;
