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
  {
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

var totalPizzasPerDay = 0;

function randomWithinRange(min, max) {
  var randomNumber = Math.floor(Math.random() * (max-min+1) + min);
  return randomNumber;
}

var pizzasPerHour = 0;
function pizzasDuringHour(arrayIndex) {
  pizzasPerHour = randomWithinRange(marketData[arrayIndex].minPizzasPerHour, marketData[arrayIndex].maxPizzasPerHour);
  totalPizzasPerDay += pizzasPerHour;
  return pizzasPerHour;
}

var deliveriesPerHour = 0;
function deliveriesDuringHour(arrayIndex) {
  deliveriesPerHour = randomWithinRange(marketData[arrayIndex].minDlvryPerHour, marketData[arrayIndex].maxDlvryPerHour);
  if (deliveriesPerHour > pizzasPerHour) {
    deliveriesPerHour -= (deliveriesPerHour-pizzasPerHour);
  }
  return deliveriesPerHour;
}

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
  return driversNeeded;
}

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
    if (pizzasThisHour === 0) {
      var deliveriesThisHour = 0;
    } else {
      var deliveriesThisHour = deliveriesDuringHour(ii);
    }
    if (pizzasThisHour === 0) {
      var driversThisHour = 0;
    } else {
      var driversThisHour = driversDuringHour(ii);
    }
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

var totalPizzasPerWeek;
function getTotalPizzasPerWeek() {
  var totalPizzasPerDay = 0;
  for (ii=0; ii<marketData.length; ii++) {
    //Generate random data from marketData
    var pizzasThisHour = pizzasDuringHour(ii);
    totalPizzasPerDay += pizzasThisHour;
  }
  var allLocations = totalPizzasPerDay * 6;
  totalPizzasPerWeek = allLocations * 7;
  return totalPizzasPerWeek;
};


//BUILDING TABLE GENERATOR (SO THAT TABLE GENERATION AND DATA GENERATION CAN BE SEPARATED FROM EACH OTHER)
//************************NEW FUNCTION!!!!*******************************
function createDiv(divId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', divId);
  parentEl.appendChild(newDiv);
};

//************************NEW FUNCTION!!!!*******************************
function createTable(tableId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTable = document.createElement('table');
  newTable.setAttribute('id', tableId);
  parentEl.appendChild(newTable);
};

//************************NEW FUNCTION!!!!*******************************
function createTableHead(headId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newThead = document.createElement('thead');
  newThead.setAttribute('id', headId);
  parentEl.appendChild(newThead);
};

//************************NEW FUNCTION!!!!*******************************
function createTh(thId, parentId, contents) {
  var parentEl = document.getElementById(parentId);
  var newTh = document.createElement('th');
  newTh.setAttribute('id', thId);
  parentEl.appendChild(newTh);
  var nodeText = document.createTextNode(contents);
  newTh.appendChild(nodeText);
};

//************************NEW FUNCTION!!!!*******************************
function createTableBody(bodyId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTbody = document.createElement('thbody');
  newTbody.setAttribute('id', bodyId);
  parentEl.appendChild(newTbody);
};

//************************NEW FUNCTION!!!!*******************************
function createTr(trId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTrow = document.createElement('tr');
  newTrow.setAttribute('id', trId);
  parentEl.appendChild(newTrow);
};

//************************NEW FUNCTION!!!!*******************************
function createTd(parentId, contents) {
  var parentEl = document.getElementById(parentId);
  var newTdata = document.createElement('td');
  parentEl.appendChild(newTdata);
  var nodeText = document.createTextNode(contents);
  newTdata.appendChild(nodeText);
};

//************************NEW FUNCTION!!!!*******************************
function createTableFooter(footerId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTfooter = document.createElement('tfoot');
  newTfooter.setAttribute('id', footerId);
  parentEl.appendChild(newTfooter);
};

//************************NEW FUNCTION!!!!*******************************
function startPizzaTable(storeLoc, appendHere) {
  var divId = storeLoc + '-div';
  createDiv(divId, appendHere);
  var tableId = storeLoc + '-tbl';
  createTable(tableId, divId);
  var theadId = storeLoc + '-head';
  createTableHead(theadId, tableId);
  var trId = storeLoc + '-headTr';
  createTr(trId, theadId);
  var thId = storeLoc + '-th';
  createTh(thId, trId, storeLoc);
  var tbodyId = storeLoc + '-body';
  createTableBody(tbodyId, tableId);
  var tfooterId = storeLoc + '-footer';
  createTableFooter(tfooterId, tableId);
};

function getPizzaData() {         ////IMPORTANT NOTE WITHIN!!!
  //Create array to store each hourlyInfo array in
  var dailyPizzaData = [];                //!!dailyPizzaData should be property of store object!!
  for (ii=0; ii<marketData.length; ii++) {
    //Generate random data from marketData
    var time = marketData[ii].time;
    var pizzasThisHour = pizzasDuringHour(ii);
    if (pizzasThisHour === 0) {
      var deliveriesThisHour = 0;
    } else {
      var deliveriesThisHour = deliveriesDuringHour(ii);
    }
    if (pizzasThisHour === 0) {
      var driversThisHour = 0;
    } else {
      var driversThisHour = driversDuringHour(ii);
    }
    //store random data in array
    var hourlyInfo = [time, pizzasThisHour, deliveriesThisHour, driversThisHour];
    dailyPizzaData.push(hourlyInfo);
  }
  return dailyPizzaData;
}


function populatePizzaTable() {
  for (aa=0; aa<this.dailyPizzaData.length; aa++) {
    var hourData = this.dailyPizzaData[aa];
    var tableBodyId = this.name + '-body';
    var tableRowId = this.name + '-tr-' + hourData[0];
    createTr(tableRowId, tableBodyId);
    for (bb=0; bb<hourData.length; bb++) {
      createTd(tableRowId, hourData[bb]);
    }
  }
}



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
