'use strict';

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  let stations = {
    Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
    'Porter', 'Davis', 'Alewife'],
    Green : ['Government Center', 'Park Street', 'Boylston', 'Arlington',
    'Copley', 'Hynes', 'Kenmore'],
    Orange : ['North Station', 'Haymarket', 'Park Street', 'State',
    'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  };

  let start = stations[startLine].indexOf(startStation);
  let end = stations[endLine].indexOf(endStation);
  let startToPark = Math.abs(stations[startLine].indexOf('Park Street') - start);
  let parkToEnd = Math.abs(stations[endLine].indexOf('Park Street') - end);
  let numberOfStops = true;

  if (startLine === endLine) {
    numberOfStops = Math.abs(start - end);
  } else {
    numberOfStops = startToPark + parkToEnd;
  }

  return numberOfStops;

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
