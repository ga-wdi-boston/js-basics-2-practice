'use strict';

// All 3 subway lines intersect at Park Street, but there are no other intersection points.
let redline = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife' ];
//let greenline = [ 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore' ];
//let orangeline = [ 'North Station', 'Haymarket', 'Park Street', 'State, Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills' ];

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

};

// make function that takes startStation and endStation and calculate the smount of stops

function stopCalculator (startStation, endStation) {
  let start = redline.indexOf('startStation');
  let end = redline.indexOf('endStation');
  return end - start;
}

stopCalculator("South Station", "Harvard");

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
