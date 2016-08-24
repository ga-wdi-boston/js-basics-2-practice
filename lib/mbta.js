'use strict';
let _ = require('underscore');

// Code here.  Beware of fat arrow notation and multiple line functions =>
let mbtaStationsOnLine = {
  'red' : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'green' : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  'orange' : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

const stopsBetweenStations = (startStation, endStation) => {
  let direction = null;
  let count = 0;
  let startStationIndex = mbtaStationsOnLine[stationLine(startStation)].indexOf(startStation);
  let endStationIndex = mbtaStationsOnLine[stationLine(endStation)].indexOf(endStation);

  if (stationLine(startStation) === stationLine(endStation)) {
    direction = getDirection(startStation, endStation);
    let countIndex = startStationIndex;

    while(endStationIndex !== countIndex) {
      countIndex += direction;
      count++;
    }
  } else {
    
  }

  return count;
};
const getDirection = function(startStation, endStation) {
  let direction = null;

  let startStationIndex = mbtaStationsOnLine[stationLine(startStation)].indexOf(startStation);
  let endStationIndex = mbtaStationsOnLine[stationLine(endStation)].indexOf(endStation);

  if (startStationIndex < endStationIndex) {
    direction = 1;
  } else {
    direction = -1;
  }
  return direction;
};

const stationLine = function(station) {
  switch(true) {
    case stationIsOnLine(station, 'red'):
      return 'red';
    case stationIsOnLine(station, 'green'):
      return 'green';
    case stationIsOnLine(station, 'orange'):
      return 'orange';
  }
};

const stationIsOnLine = function(station, line) {
  let isOnLine = null;
  if (mbtaStationsOnLine[line].indexOf(station) === -1) {
    isOnLine = false;
  } else {
    isOnLine = true;
  }
  return isOnLine;
};

//test functions
stationIsOnLine('South Station', 'red');
stationLine('South Station');


module.exports = {
  stopsBetweenStations,
  stretch: false,
};
