////////////////////////////////array with market data////////////////////////////
var marketData = [
  {'time': '8:00', 'minsAndMaxes': []},
  {'time': '9:00', 'minsAndMaxes': []},
  {'time': '10:00', 'minsAndMaxes': []},
  {'time': '11:00', 'minsAndMaxes': []},
  {'time': '12:00', 'minsAndMaxes': []},
  {'time': '13:00', 'minsAndMaxes': []},
  {'time': '14:00', 'minsAndMaxes': []},
  {'time': '15:00', 'minsAndMaxes': []},
  {'time': '16:00', 'minsAndMaxes': []},
  {'time': '17:00', 'minsAndMaxes': []},
  {'time': '18:00', 'minsAndMaxes': []},
  {'time': '19:00', 'minsAndMaxes': []},
  {'time': '20:00', 'minsAndMaxes': []},
  {'time': '21:00', 'minsAndMaxes': []},
  {'time': '22:00', 'minsAndMaxes': []},
  {'time': '23:00', 'minsAndMaxes': []},
  {'time': '00:00', 'minsAndMaxes': []},
  {'time': '01:00', 'minsAndMaxes': []}
];
////////////////////////////////array with market data////////////////////////////

function populateMarketData(dataArray) {
  for (ff=0; ff<dataArray.length; ff++) {
    for (gg=0; gg<dataArray[ff].length; gg++) {
      this.marketData[ff].minsAndMaxes.push(dataArray[ff][gg]);
    }
  }
}

var totalPizzasPerDay = 0;

//////////////////////////functions for generating random numbers/////////////////
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
//////////////////////////functions for generating random numbers/////////////////


//////////////////////////functions for generating table//////////////////////////
//create div to house table and attach to HTML element, found by id
function createDiv(divId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', divId);
  parentEl.appendChild(newDiv);
};

//create table element and append to div
function createTable(tableId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTable = document.createElement('table');
  newTable.setAttribute('id', tableId);
  parentEl.appendChild(newTable);
};

//create table head and append to table
function createTableHead(headId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newThead = document.createElement('thead');
  newThead.setAttribute('id', headId);
  parentEl.appendChild(newThead);
};

//create table body and append to table
function createTableBody(bodyId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTbody = document.createElement('thbody');       //!!!!!!!thbody
  newTbody.setAttribute('id', bodyId);
  parentEl.appendChild(newTbody);
};

//create table row and append to thead or table body
function createTr(trId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTrow = document.createElement('tr');
  newTrow.setAttribute('id', trId);
  parentEl.appendChild(newTrow);
};

//create th and append to tr
function createTh(thId, parentId, contents) {
  var parentEl = document.getElementById(parentId);
  var newTh = document.createElement('th');
  newTh.setAttribute('id', thId);
  parentEl.appendChild(newTh);
  var nodeText = document.createTextNode(contents);
  newTh.appendChild(nodeText);
};

//create td and append to tr
function createTd(parentId, contents) {
  var parentEl = document.getElementById(parentId);
  var newTdata = document.createElement('td');
  parentEl.appendChild(newTdata);
  var nodeText = document.createTextNode(contents);
  newTdata.appendChild(nodeText);
};

//create table footer - not yet used
function createTableFooter(footerId, parentId) {
  var parentEl = document.getElementById(parentId);
  var newTfooter = document.createElement('tfoot');
  newTfooter.setAttribute('id', footerId);
  parentEl.appendChild(newTfooter);
};
//////////////////////////functions for generating table//////////////////////////


///////////////////////////////array of store objects/////////////////////////////
var stores = [
  {
    name: 'beaverton',
    dailyPizzaData: [],         //Create array to store each hourlyInfo array in
    getPizzaData: function() {
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
        this.dailyPizzaData.push(hourlyInfo);
      }
      return this.dailyPizzaData;
    },
    startPizzaTable: function(appendToThisId) {   //build div, table, and first two rows containing store name and column headings
      var divId = this.name + '-div';
      createDiv(divId, appendToThisId);
      var tableId = this.name + '-tbl';
      createTable(tableId, divId);
      var theadId = this.name + '-head';
      createTableHead(theadId, tableId);
      var trId = this.name + '-headTr';
      createTr(trId, theadId);
      var thId = this.name + '-th';
      createTh(thId, trId, this.name);
      var tbodyId = this.name + '-body';
      createTableBody(tbodyId, tableId);
      var headingsTrId = this.name + '-headingsTr';
      createTr(headingsTrId, tbodyId);
      var tfooterId = this.name + '-footer';
      createTableFooter(tfooterId, tableId);

      var headings = ['Hour', 'Pizzas', 'Deliveries', 'Drivers'];
      for (hh=0; hh<headings.length; hh++) {
        var headingThId = this.name + headings[hh];
        createTh(headingThId, headingsTrId, headings[hh]);
      }
    },
    populatePizzaTable: function() {    //insert daily pizza data into rows and attach to pizza table
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
  },

  {
    name: 'hillsboro',
    dailyPizzaData: [],
    getPizzaData: function() {
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
        this.dailyPizzaData.push(hourlyInfo);
      }
      return this.dailyPizzaData;
    },
    startPizzaTable: function(appendToThisId) {
      var divId = this.name + '-div';
      createDiv(divId, appendToThisId);
      var tableId = this.name + '-tbl';
      createTable(tableId, divId);
      var theadId = this.name + '-head';
      createTableHead(theadId, tableId);
      var trId = this.name + '-headTr';
      createTr(trId, theadId);
      var thId = this.name + '-th';
      createTh(thId, trId, this.name);
      var tbodyId = this.name + '-body';
      createTableBody(tbodyId, tableId);
      var headingsTrId = this.name + '-headingsTr';
      createTr(headingsTrId, tbodyId);
      var tfooterId = this.name + '-footer';
      createTableFooter(tfooterId, tableId);

      var headings = ['Hour', 'Pizzas', 'Deliveries', 'Drivers'];
      for (hh=0; hh<headings.length; hh++) {
        var headingThId = this.name + headings[hh];
        createTh(headingThId, headingsTrId, headings[hh]);
      }
    },
    populatePizzaTable: function() {
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
  },

  {
    name: 'downtown',
    dailyPizzaData: [],
    getPizzaData: function() {
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
        this.dailyPizzaData.push(hourlyInfo);
      }
      return this.dailyPizzaData;
    },
    startPizzaTable: function(appendToThisId) {
      var divId = this.name + '-div';
      createDiv(divId, appendToThisId);
      var tableId = this.name + '-tbl';
      createTable(tableId, divId);
      var theadId = this.name + '-head';
      createTableHead(theadId, tableId);
      var trId = this.name + '-headTr';
      createTr(trId, theadId);
      var thId = this.name + '-th';
      createTh(thId, trId, this.name);
      var tbodyId = this.name + '-body';
      createTableBody(tbodyId, tableId);
      var headingsTrId = this.name + '-headingsTr';
      createTr(headingsTrId, tbodyId);
      var tfooterId = this.name + '-footer';
      createTableFooter(tfooterId, tableId);

      var headings = ['Hour', 'Pizzas', 'Deliveries', 'Drivers'];
      for (hh=0; hh<headings.length; hh++) {
        var headingThId = this.name + headings[hh];
        createTh(headingThId, headingsTrId, headings[hh]);
      }
    },
    populatePizzaTable: function() {
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
  },

  {
    name: 'northeast',
    dailyPizzaData: [],
    getPizzaData: function() {
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
        this.dailyPizzaData.push(hourlyInfo);
      }
      return this.dailyPizzaData;
    },
    startPizzaTable: function(appendToThisId) {
      var divId = this.name + '-div';
      createDiv(divId, appendToThisId);
      var tableId = this.name + '-tbl';
      createTable(tableId, divId);
      var theadId = this.name + '-head';
      createTableHead(theadId, tableId);
      var trId = this.name + '-headTr';
      createTr(trId, theadId);
      var thId = this.name + '-th';
      createTh(thId, trId, this.name);
      var tbodyId = this.name + '-body';
      createTableBody(tbodyId, tableId);
      var headingsTrId = this.name + '-headingsTr';
      createTr(headingsTrId, tbodyId);
      var tfooterId = this.name + '-footer';
      createTableFooter(tfooterId, tableId);

      var headings = ['Hour', 'Pizzas', 'Deliveries', 'Drivers'];
      for (hh=0; hh<headings.length; hh++) {
        var headingThId = this.name + headings[hh];
        createTh(headingThId, headingsTrId, headings[hh]);
      }
    },
    populatePizzaTable: function() {
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
  },

  {
    name: 'clackamas',
    dailyPizzaData: [],
    getPizzaData: function() {
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
        this.dailyPizzaData.push(hourlyInfo);
      }
      return this.dailyPizzaData;
    },
    startPizzaTable: function(appendToThisId) {
      var divId = this.name + '-div';
      createDiv(divId, appendToThisId);
      var tableId = this.name + '-tbl';
      createTable(tableId, divId);
      var theadId = this.name + '-head';
      createTableHead(theadId, tableId);
      var trId = this.name + '-headTr';
      createTr(trId, theadId);
      var thId = this.name + '-th';
      createTh(thId, trId, this.name);
      var tbodyId = this.name + '-body';
      createTableBody(tbodyId, tableId);
      var headingsTrId = this.name + '-headingsTr';
      createTr(headingsTrId, tbodyId);
      var tfooterId = this.name + '-footer';
      createTableFooter(tfooterId, tableId);

      var headings = ['Hour', 'Pizzas', 'Deliveries', 'Drivers'];
      for (hh=0; hh<headings.length; hh++) {
        var headingThId = this.name + headings[hh];
        createTh(headingThId, headingsTrId, headings[hh]);
      }
    },
    populatePizzaTable: function() {
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
  },

  {
    name: 'pdx-airport',
    dailyPizzaData: [],
    getPizzaData: function() {
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
        this.dailyPizzaData.push(hourlyInfo);
      }
      return this.dailyPizzaData;
    },
    startPizzaTable: function(appendToThisId) {
      var divId = this.name + '-div';
      createDiv(divId, appendToThisId);
      var tableId = this.name + '-tbl';
      createTable(tableId, divId);
      var theadId = this.name + '-head';
      createTableHead(theadId, tableId);
      var trId = this.name + '-headTr';
      createTr(trId, theadId);
      var thId = this.name + '-th';
      createTh(thId, trId, this.name);
      var tbodyId = this.name + '-body';
      createTableBody(tbodyId, tableId);
      var headingsTrId = this.name + '-headingsTr';
      createTr(headingsTrId, tbodyId);
      var tfooterId = this.name + '-footer';
      createTableFooter(tfooterId, tableId);

      var headings = ['Hour', 'Pizzas', 'Deliveries', 'Drivers'];
      for (hh=0; hh<headings.length; hh++) {
        var headingThId = this.name + headings[hh];
        createTh(headingThId, headingsTrId, headings[hh]);
      }
    },
    populatePizzaTable: function() {
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
  }
]
///////////////////////////////array of store objects/////////////////////////////
