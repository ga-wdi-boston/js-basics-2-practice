'use strict';

/*
Write a function that takes the line and stop that a rider is getting on at and
the line and stop that a rider is getting off at and returns the total number
of stops for the trip.
*/

// red line
let redStops = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
  'Porter', 'Davis', 'Alewife'];

// green line
let greenStops = ['Government Center', 'Park Street', 'Boylston', 'Arlington',
  'Copley', 'Hynes', 'Kenmore'];

// orange line
let orangeStops = ['North Station', 'Haymarket', 'Park Street', 'State',
  'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

// create a dictionary where the lines are keys and the value of each key
// is an array of stops
let mbta = {};
mbta.red = redStops;
mbta.green = greenStops;
mbta.orange = orangeStops;

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
let startIndex;
let endIndex;
let distance;
// if same line => absolute value of difference between array indices
if (startLine === endLine) {
  startIndex = mbta[startLine].indexOf(startStation);
  endIndex = mbta[endLine].indexOf(endStation);
  distance = Math.abs(startIndex - endIndex);
} else {
  // if different lines => absolute value of difference betwen first stop's array
  // index and Park Street index on that line, PLUS same calculation for the end
  // station
  startIndex = mbta[startLine].indexOf(startStation);
  let startParkIndex = mbta[startLine].indexOf('Park Street');
  let endParkIndex = mbta[endLine].indexOf('Park Street');
  endIndex = mbta[endLine].indexOf(endStation);
  let startLeg = Math.abs(startIndex - startParkIndex);
  let endLeg = Math.abs(endIndex - endParkIndex);
  distance = startLeg + endLeg;
}
// return the distance between stops
return distance;
};


module.exports = {
  stopsBetweenStations,
  stretch: false,
};
