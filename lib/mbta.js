'use strict';

// Code here.

// Sets up MBTA lines
const mbta = {
'Red':['South Station', 'Park Street', 'Kendall', 'Central',
'Harvard', 'Porter', 'Davis', 'Alewife'],
'Green':['Government Center', 'Park Street', 'Boylston', 'Arlington',
'Copley', 'Hynes', 'Kenmore'],
'Orange':['North Station', 'Haymarket', 'Park Street', 'State',
'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']};

// Define function for distance
const stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation){
  if(startLine === endLine){
    let line = startLine;
    let startIndex = mbta[line].indexOf(startStation);
    let endIndex = mbta[line].indexOf(endStation);
    //console.log(startIndex, endIndex);
    let Totaldist = Math.abs( startIndex - endIndex );
    console.log(typeof Totaldist, Totaldist);
    console.log(Totaldist instanceof Number);
    return Totaldist;
  }else{

    let firstD = mbta[startLine].indexOf('Park Street');
    firstD -= mbta[startLine].indexOf(startStation);
    console.log(firstD);

    let secondD = mbta[endLine].indexOf('Park Street');
    secondD -= mbta[endLine].indexOf(endStation);
    console.log(secondD);

    let Totaldist = Math.abs(firstD) + Math.abs(secondD);
    console.log(typeof Totaldist, Totaldist);
    console.log(Totaldist instanceof Number);

    return Totaldist;
  }
};

// Test - should equal 2
let redGreenTest = stopsBetweenStations('Red', 'Kendall', 'Green', 'Boylston');
console.log('redGreenTest (2?): ', redGreenTest);

// Test - should equal 4
let orangeGreenTest = stopsBetweenStations('Orange', 'Haymarket', 'Green', 'Copley');
console.log('orangeGreenTest (4?): ', orangeGreenTest);

// Test should equal 7
let redLineTest = stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station');
console.log('redLineTest (7?): ', redLineTest);

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
