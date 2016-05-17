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
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if(startLine === endLine){
    let startIndex = findStationIndex(startLine, startStation);
    let endIndex = findStationIndex(endLine, endStation);
    console.log(Math.abs(startIndex-endIndex));
  } else{
    //something to do with Park Street distances
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
