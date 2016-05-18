'use strict';
let subway = {
  'Red': [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ],
  'Green': [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ],
  'Orange': [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills',
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
  if(line ==="Orange"){
    return 2
  } else {
  return 1
  }
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let startIndex = findStationIndex(startLine, startStation);
  let endIndex = findStationIndex(endLine, endStation);
  let firstParkStreet = getParkStreetIndex(startLine);
  let secondParkStreet = getParkStreetIndex(endLine);
  let line1Distance = Math.abs(startIndex - firstParkStreet);
  let line2Distance = Math.abs(endIndex - secondParkStreet);
  if(startLine === endLine){
    return Math.abs(startIndex-endIndex);
  } else{
    return line1Distance + line2Distance;
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
