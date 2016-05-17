'use strict';

// Code here.

// Sets up MBTA lines
let redLine = ['South Station', 'Park Street', 'Kendall', 'Central',
'Harvard', 'Porter', 'Davis', 'Alewife'];
let greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington',
'Copley', 'Hynes', 'Kenmore'];
let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State',
'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

// Define function for distance
const stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation){
  if(startLine === endLine){
    let line = startLine;
    let startIndex = line.indexOf(startStation);
    let endIndex = line.indexOf(endStation);
    console.log(startIndex, endIndex);
    let dist = Math.abs( startIndex - endIndex );
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
let redGreenTest = stopsBetweenStations(redLine, 'Kendall', greenLine, 'Boylston');
console.log('redGreenTest (2?): ', redGreenTest);

// Test should equal 7
let redLineTest = stopsBetweenStations(redLine, 'Alewife', redLine, 'South Station');
console.log('redLineTest (7?): ', redLineTest);

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
