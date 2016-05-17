'use strict';

// Code here.

// Sets up MBTA lines
let redLine = ['South Station', 'Park Street', 'Kendall', 'Central'];
redLine = redLine.concat(['Harvard', 'Porter', 'Davis', 'Alewife']);
let greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington'];
greenLine = greenLine.concat(['Copley', 'Hynes', 'Kenmore']);
let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State'];
orangeLine = orangeLine.concat(['Downtown Crossing', 'Chinatown']);
orangeLine = orangeLine.concat(['Back Bay', 'Forest Hills']);

// Define function for distance
let stopsBetweenStations = function stopsBetweenStations(startLine,
  startStation, endLine, endStation){
  if(startLine === endLine){
    let line = startLine;
    let dist = Math.abs(line.indexOf(startStation) - line.indexOf(endStation));
    return dist;
  }else{

    let firstD = startLine.indexOf('Park Street');
    firstD -= startLine.indexOf(startStation);
    console.log(firstD);

    let secondD = endLine.indexOf('Park Street');
    secondD -= endLine.indexOf(endStation);
    console.log(secondD);

    let Totaldist = Math.abs(firstD) + Math.abs(secondD);
    console.log(Totaldist);

    return Totaldist;
  }
};

// Test - should equal 2
let distKB = stopsBetweenStations(redLine, 'Kendall', greenLine, 'Boylston');
console.log(distKB);

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
