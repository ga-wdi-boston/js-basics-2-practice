'use strict';

// Code here.

let mbtaLines = {
  red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
    'Porter', 'Davis', 'Alewife'],
  green : ['Government Center', 'Park Street', 'Boylston', 'Arlington',
    'Copley', 'Hynes', 'Kenmore'],
  orange : ['North Station', 'Haymarket', 'Park Street', 'State',
'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

let parkStreet = startLine.indexOf('Park Street');

let parkStreetTrip = function (startLine, startStation, parkStreet, endLine, endStation) {
  return startLine.slice(startStation, parkStreet)+ endLine.slice(parkStreet, endStation);
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if (startLine.includes('Park Street', startStation)) {
    return parkStreetTrip.length;
  } else {
    return (startLine.slice(startStation, endStation)).length;
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
