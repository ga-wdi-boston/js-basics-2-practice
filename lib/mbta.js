'use strict';

// Code here.
let MBTA = {
  red: [ 'South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
  'Porter', 'Davis', 'Alewife' ],
  green: [ 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley',
   'Hynes', 'Kenmore' ],
  orange: [ 'North Station', 'Haymarket', 'Park Street', 'State',
  'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills' ]
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
    let startPosition = MBTA[startLine].indexOf(startStation);
    let startToPark = startPosition - (MBTA[startLine].indexOf('Park Street'));
    let endPosition = MBTA[endLine].indexOf(endStation);
    let endToPark = endPosition - (MBTA[endLine].indexOf('Park Street'));
    if (startLine === endLine) {
      return Math.abs(endPosition - startPosition);
    }
    else {
    return Math.abs(startToPark) + Math.abs(endToPark);
  };
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
