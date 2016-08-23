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

let intersect = 'Park Street';

// create a dictionary where the lines are keys and the value of each key
// is an array of stops
let mbta = {};
mbta.red = redStops;
mbta.green = greenStops;
mbta.orange = orangeStops;

console.log(mbta);

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

// if same line => absolute value of difference between array indices
if (startLine === endLine) {
  let startIndex = mbta['startLine'].indexOf(startStation);
  let endIndex = mbta['endLine'].indexOf(endStation);
  let distance = Math.abs(startIndex - endIndex);
} else {
  // if different lines => absolute value of difference betwen first stop's array
  // index and Park Street index on that line, PLUS same calculation for the end
  // station



}




};

// module.exports = {
//   stopsBetweenStations,
//   stretch: false,
// };
