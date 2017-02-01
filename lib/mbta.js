'use strict';

module.exports = {
  stopsBetweenStations,
  stretch: false,
};

//lines are keys in a dictionary, values are an array

let orangeLineStops = [
   'North Station',
   'Haymarket',
   'Park Street',
   'State',
   'Downtown Crossing',
   'Chinatown',
   'Back Bay',
   'Forest Hills'
 ];
let greenLineStops = [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ];
let redLineStops = [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ];
let mbtaLine = {
    orangeLine : orangeLineStops,
    greenLine : greenLineStops,
    redLine : redLineStops
  };

//pseuocode here//

// 1. create a new array of the distances of each station from 
// 'Park Street'
// - first, create a function that will find the indexes of each stop and
//    store them in an array.
// - then, create a for loop that will essentially create a new array where the
//    distance will be stored depending on the line/ distance from park st
//    note: have a condition where if  startStation[1] == Park, make a certain
//    array...etc else startStation[2] == Park make another.
// 2. return value of startStation distance from Park plus end Station distance
// from park
// - if it never hits park, ssubtract, take absolute value so return the number
// if true \\ num * -1 to make it true
  const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
    let stationIndex = mbtaLine.startLine.indexOf(startStation);

//extra notes//
//let startStationIndex = function() {
  //mbtaLine.greenLine.indexOf()}

// make a new array of the indexes, turn the indexes into the correct distance
//depending on the lines

//let startNumber = mbtaLine.startLine.indexOf(startStation);
//
