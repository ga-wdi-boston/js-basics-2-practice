'use strict';

var stopsPerLine = function(stopOne,stopTwo,line) {

  const lines = {
    "Red":["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
    "Orange":["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],
    "Green":["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"]
  };

  var indexOfFirstStop = 0;
  var indexOfSecondStop = 0;

  for (var i = 0 ; i < lines[line].length ; i++) {
    if (lines[line][i] == stopOne) {
      indexOfFirstStop = i;
      break;
    }
  }

  for (var i = 0 ; i < lines[line].length ; i++) {
    if (lines[line][i] == stopTwo) {
      indexOfSecondStop = i;
      break;
    }
  }

  if (indexOfFirstStop > indexOfSecondStop) {
    return indexOfFirstStop - indexOfSecondStop;
  } else {
    return indexOfSecondStop - indexOfFirstStop;
  }
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  if (startLine != endLine) {
    return stopsPerLine(startStation,"Park Street",startLine) + stopsPerLine(endStation,"Park Street",endLine);
  } else {
    return stopsPerLine(startStation,endStation,startLine);
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
