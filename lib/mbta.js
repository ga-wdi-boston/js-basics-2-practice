'use strict';

// Code here.

// makes arrays of each line's stops
let redLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];
let greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

/* returns true if start and end lines are the same
const isSameLine = function(start, end) {
  if (start === end) {
    return true;
  } else {
  return false;
}
}; */

// count stops on same line
const countStopsSameLine = function(line, startStation, endStation) {
  let a = line.indexOf(startStation);
  let b = line.indexOf(endStation);
  return Math.abs(a - b);
}

// count stops to Park Street
const countStopsToPark = function(line, startStation) {
  let a = line.indexOf(startStation);
  let b = line.indexOf('Park Street');
  return Math.abs(a - b);
}

//main function to count number of stops
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if (startLine === endLine) {
    return countStopsSameLine(startLine, startStation, endStation);
  } else {
    return (countStopsToPark(startLine, startStation) + countStopsToPark(endLine, endStation));
  }
};

// Testing my shit
console.log('1) Red Line Alewife --> Red Line South Station: ' + stopsBetweenStations(redLine, 'Alewife', redLine, 'South Station'));
console.log('2) Red Line South Station --> Red Line Alewife: ' + stopsBetweenStations(redLine, 'South Station', redLine, 'Alewife'));

console.log('3) Green Line Haymarket --> Green Line Copley: ' + stopsBetweenStations(greenLine, 'Haymarket', greenLine, 'Copley'));
console.log('4) Green Line Copley --> Green Line Haymarket: ' + stopsBetweenStations(greenLine, 'Copley', redLine, 'Haymarket'));

console.log('5) Orange Line North Station --> Orange Line Forest Hills: ' + stopsBetweenStations(orangeLine, 'North Station', orangeLine, 'Forest Hills'));
console.log('6) Orange Line Forest Hills --> Orange Line North Station: ' + stopsBetweenStations(orangeLine, 'Forest Hills', orangeLine, 'North Station'));

console.log('7) Red Line South Station --> Green Line Kenmore: ' + stopsBetweenStations(redLine, 'South Station', greenLine, 'Kenmore'));
console.log('8) Green Line Government Center --> Red Line Alewife: ' + stopsBetweenStations(greenLine, 'Government Center', redLine, 'Alewife'));

console.log('9) Red Line South Station --> Orange Line Forest Hills: ' + stopsBetweenStations(redLine, 'South Station', orangeLine, 'Forest Hills'));
console.log('10) Orange Line North Station --> Red Line Alewife: ' + stopsBetweenStations(orangeLine, 'North Station', redLine, 'Alewife'));

console.log('11) Green Line Government Center --> Orange Line Forest Hills: ' + stopsBetweenStations(greenLine, 'Government Center', orangeLine, 'Forest Hills'));
console.log('12) Orange Line North Station --> Green Line Kenmore: ' + stopsBetweenStations(orangeLine, 'North Station', greenLine, 'Kenmore'));


module.exports = {
  stopsBetweenStations,
  stretch: false,
};
