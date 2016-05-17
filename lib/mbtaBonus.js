'use strict';

// Code here.

// Sets up MBTA lines
const mbta = {
'Red':['South Station', 'Park Street', 'Kendall', 'Central',
'Harvard', 'Porter', 'Davis', 'Alewife'],
'Green':['Haymarket', 'Government Center', 'Park Street', 'Boylston', 'Arlington',
'Copley', 'Hynes', 'Kenmore'],
'Orange':['North Station', 'Haymarket', 'Park Street', 'State',
'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']};

const intersectionsList = ['Park Street', 'Haymarket'];

// Define function for distance
const stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation, intersection){
  if(mbta[startLine].indexOf(intersection) === -1 || mbta[endLine].indexOf(intersection) === -1){
    return 1000;
  } else {
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

        let firstD = mbta[startLine].indexOf(intersection);
        firstD -= mbta[startLine].indexOf(startStation);
        //console.log(firstD);

        let secondD = mbta[endLine].indexOf(intersection);
        secondD -= mbta[endLine].indexOf(endStation);
        //console.log(secondD);

        let Totaldist = Math.abs(firstD) + Math.abs(secondD);
        //console.log(typeof Totaldist, Totaldist);
        //console.log(Totaldist instanceof Number);

        return Totaldist;
      }
  }
};

// Define function for distance
const bonusStopsBetweenStations = function bonusStopsBetweenStations(startLine, startStation, endLine, endStation, intersections){

    let distancesArray = [];

    for(let i=0; i<intersections.length; i++){
      let possibleDistance = stopsBetweenStations(startLine, startStation, endLine, endStation, intersections[i]);
      console.log('Distance crossing at ', intersections[i], ':', possibleDistance);
      distancesArray.push(possibleDistance);
    }
    let Totaldist = Math.min.apply(Math, distancesArray);
    console.log(startStation, ' to ', endStation);
    return Totaldist;
};

// TESTS

// Message
console.log('___________________________________');
console.log('1000 denotes an impossible option, it is disqualified by the "min".');
console.log('___________________________________');

// Test - should equal 2
let redGreenTest = bonusStopsBetweenStations('Red', 'Kendall', 'Green', 'Boylston', intersectionsList);
console.log('redGreenTest (Should equal 2): \nFinal Answer:', redGreenTest);
console.log('___________________________________');

// Test - should equal 4
let orangeGreenTest = bonusStopsBetweenStations('Orange', 'North Station', 'Green', 'Government Center', intersectionsList);
console.log('orangeGreenTest (Should equal 2): \nFinal Answer:', orangeGreenTest);
console.log('___________________________________');

// Test should equal 7
let redRedTest = bonusStopsBetweenStations('Red', 'Davis', 'Red', 'South Station', intersectionsList);
console.log('redRedTest (Should equal 6): \nFinal Answer:', redRedTest);
console.log('___________________________________');

module.exports = {
  bonusStopsBetweenStations,
  stretch: false,
};
