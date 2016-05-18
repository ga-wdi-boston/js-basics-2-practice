'use strict';

let redLineStops = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];
let blueLineStops = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
let orangeLineStops = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

let mbta = {
  Red : redLineStops,
  Blue : blueLineStops,
  Orange : orangeLineStops
}

let startLine, startStation, endLine, endStation;
let startIndex, endIndex;
let parkStreetIndex;
let numStops;

function getFirstLine (startLine){
  startLine = console.log ("What is the line you will begin your ride? ");
  return startLine;
}
function getFirstStop (startStation){
  startStation = console.log ("What is the stop you will begin at? ");
  return startStation;
}

function getLastLine (endLine) {
  endLine = console.log ("What is the line you will end your ride? ");
  return endLine;
}

function getLastStop (endStation){
  endStation = console.log ("What is the last stop you will end at? ");
  return endStation;
}

getFirstLine();
getFirstStop();
getLastLine();
getLastStop();

startStation = 'Haymarket';
startLine = 'Orange'
endStation = 'Downtown Crossing';
endLine = 'Orange';

startIndex = mbta[startLine].indexOf(startStation) + 1;
endIndex = mbta[endLine].indexOf(endStation) + 1;

if (mbta === 'Red' || mbta === 'Blue'){
  parkStreetIndex = 2;
} else {
  parkStreetIndex = 3;
}

if (endLine !== startLine) {
  numStops = Math.abs( (startIndex - parkStreetIndex) + (parkStreetIndex - endIndex) ) + 1;
} else {
  numStops = Math.abs (startIndex - endIndex);
}

console.log ("You have " + numStops + " stops to ride on your trip" );

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
