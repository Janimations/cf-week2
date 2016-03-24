var totalPizzasPerDay = 0;

//function for generating random number within certain range
function randomWithinRange(min, max) {
  var randomNumber = Math.floor(Math.random() * (max-min+1) + min);
  return randomNumber;
}

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
  var newTbody = document.createElement('tbody');   //////////WAS thbody
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

//object constructor for store object
function store(name) {
  this.name = name;
  this.dailyPizzasSold = 0;
  this.weeklyPizzasSold = 0;
  this.pizzasPerHour = 0;
  this.deliveriesPerHour = 0;
  this.marketData = [     //array of hour objects, each with empty minsAndMaxes array
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
    {'time': '01:00', 'minsAndMaxes': ''}
  ];
  this.dailyPizzaData = [];
  this.populateMarketData = function(dataArray) { //accepts array of hourly data arrays
    for (x=0; x<3; x++) {
      this.marketData[x].minsAndMaxes = dataArray[0];
    }
    for (x=3; x<6; x++) {
      this.marketData[x].minsAndMaxes = dataArray[1];
    }
    for (x=6; x<9; x++) {
      this.marketData[x].minsAndMaxes  = dataArray[2];
    }
    for (x=9; x<12; x++) {
      this.marketData[x].minsAndMaxes = dataArray[3];
    }
    for (x=12; x<15; x++) {
      this.marketData[x].minsAndMaxes = dataArray[4];
    }
    for (x=15; x<18; x++) {
      this.marketData[x].minsAndMaxes = dataArray[5];
    }
  };
  this.pizzasDuringHour = function(arrayIndex) {
    this.pizzasPerHour = randomWithinRange(this.marketData[arrayIndex].minsAndMaxes[0], this.marketData[arrayIndex].minsAndMaxes[1]);
    totalPizzasPerDay += this.pizzasPerHour;
    this.dailyPizzasSold += this.pizzasPerHour;
    this.weeklyPizzasSold += (this.pizzasPerHour * 7);
    return this.pizzasPerHour;
  };
  this.deliveriesDuringHour = function(arrayIndex) {
    this.deliveriesPerHour = randomWithinRange(this.marketData[arrayIndex].minsAndMaxes[2], this.marketData[arrayIndex].minsAndMaxes[3]);
    if (this.deliveriesPerHour > this.pizzasPerHour) {
      this.deliveriesPerHour -= (this.deliveriesPerHour-this.pizzasPerHour);
    }
    return this.deliveriesPerHour;
  };
  this.driversDuringHour = function(arrayIndex) {
    var driversNeeded;
    var deliveries = this.deliveriesPerHour;
    var remainder = deliveries%3;
    if (deliveries === 0) {
      driversNeeded = 0;
    } else if (remainder === 0) {
        driversNeeded = deliveries/3;
      } else {
          driversNeeded = Math.floor(deliveries/3) + 1;
      }
    return driversNeeded;
  };
  this.getPizzaData = function() {
    for (ii=0; ii<this.marketData.length; ii++) {
      //Generate random data from marketData
      var time = this.marketData[ii].time;
      var pizzasThisHour = this.pizzasDuringHour(ii);
      if (pizzasThisHour === 0) {
        var deliveriesThisHour = 0;
      } else {
        var deliveriesThisHour = this.deliveriesDuringHour(ii);
      }
      if (pizzasThisHour === 0) {
        var driversThisHour = 0;
      } else {
        var driversThisHour = this.driversDuringHour(ii);
      }
      //store random data in array
      var hourlyInfo = [time, pizzasThisHour, deliveriesThisHour, driversThisHour];
      this.dailyPizzaData.push(hourlyInfo);
    }
    return this.dailyPizzaData;
  };
  this.startPizzaTable = function(appendToThisId) {   //build div, table, and first two rows containing store name and column headings
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
    var thEl = document.getElementById(thId);
    thEl.setAttribute('colspan', '4');
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
  };
  this.populatePizzaTable = function() {    //insert daily pizza data into rows and attach to pizza table
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

//create each store and populate market data with respective figures
var beaverton = new store('beaverton');
beaverton.populateMarketData([ [0,4,0,4], [0,7,0,4], [2,15,1,4], [15,35,3,8], [12,31,5,12], [5,20,6,11] ]);

var hillsboro = new store('hillsboro');
hillsboro.populateMarketData([ [1,3,1,7], [5,9,2,8], [2,13,1,6], [18,32,3,9], [1,3,5,12], [8,20,6,16] ]);

var downtown = new store('downtown');
downtown.populateMarketData([ [0,4,0,4], [0,7,0,4], [2,15,1,4], [10,26,4,6], [8,22,7,15], [0,2,2,8] ]);

var northeast = new store('northeast');
northeast.populateMarketData([ [0,4,0,4], [0,7,0,4], [5,15,0,4], [25,39,13,18], [22,36,5,22], [5,21,16,31] ]);

var clackamas = new store('clackamas');
clackamas.populateMarketData([ [2,7,3,5], [3,8,3,9], [1,5,1,4], [5,13,2,4], [22,41,15,42], [15,20,6,21] ]);

var pdxairport = new store('pdx-airport');
pdxairport.populateMarketData([ [0,4,0,4], [0,7,0,4], [2,15,1,4], [6,9,5,18], [4,8,2,5], [2,4,3,11] ]);

//array of store objects
var stores = [beaverton, hillsboro, downtown, northeast, clackamas, pdxairport];
