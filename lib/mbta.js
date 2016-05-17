'use strict';
let subway = {
  'Red Line': [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ],
  'Green Line': [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ],
  'Orange Line': [
    'Forest Hills',
    'Back Bay',
    'Chinatown',
    'Downtown Crossing',
    'Park Street',
    'Haymarket',
    'North Station'
  ]
};

let findStationIndex = function (line, station) {
  for(var prop in subway){
    if(prop === line){
    for(let i=0; i<subway[line].length; i++){
      if(subway[line][i]===station){
        return subway[line].indexOf(station);
        }
      }
    }
  }
};

let getParkStreetIndex = function (line) {
  if(line ==="Orange Line"){
    return 4
  } else {
  return 1
  }
};

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let startIndex = findStationIndex(startLine, startStation);
  let endIndex = findStationIndex(endLine, endStation);
  let firstParkStreet = getParkStreetIndex(startLine);
  let secondParkStreet = getParkStreetIndex(endLine);
  let line1Distance = Math.abs(startIndex - firstParkStreet);
  let line2Distance = Math.abs(endIndex - secondParkStreet);
  if(startLine === endLine){
    console.log(Math.abs(startIndex-endIndex));
  } else{
    console.log(line1Distance);
    console.log(line2Distance);
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
