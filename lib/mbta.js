'use strict';

/*
Write a function that takes the line and stop that a rider is getting on at and
the line and stop that a rider is getting off at and returns the total number
of stops for the trip.
*/

// red line
let red = [];

// green line
let green = [];

// orange line
let orange = [];

// create a dictionary where the lines are keys and the value of each key
// is an array of stops
let mbta = {};
mbta[red] = [];
mbta[green] = [];
mbta[orange] = [];

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

// if same line, same stop => return 0 or 'you're already there!''

// if same line => absolute value of difference between array indices

// if different lines => absolute value of difference betwen first stop's array
// index and Park Street index on that line, PLUS same calculation for the end
// station


};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
