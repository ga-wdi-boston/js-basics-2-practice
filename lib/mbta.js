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

let index = function (line, station) {
  for(var prop in subway){
    if(prop === line){
    
    console.log(prop);
    }
  }
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if(startLine === endLine){
    console.log(subway[startLine].indexOf(startStation));
    console.log(subway[startLine].indexOf(endStation));
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
