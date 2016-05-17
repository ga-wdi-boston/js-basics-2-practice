'use strict';

const Lines = {
  'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'Green': ['Haymarket', 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Black Bay', 'Forest Hills']
};

const closestJunction = function(startLine, startStation) {
  if (startLine === 'Red') {
    return 'Park Street';
  } else {
    let distanceToPark = Lines[startLine].indexOf('Park Street') - Lines[startLine].indexOf(startStation);
    let distanceToHay = Lines[startLine].indexOf('Haymarket') - Lines[startLine].indexOf(startStation);
    if (distanceToPark > distanceToHay) {
      return 'Haymarket';
    } else {
      return 'Park Street';
    }
  }
};

const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    return Math.abs(Lines[startLine].indexOf(startStation) - Lines[endLine].indexOf(endStation));
  } else {
    return Math.abs(Lines[startLine].indexOf(closestJunction(startLine, startStation)) - Lines[startLine].indexOf(startStation)) + Math.abs(Lines[endLine].indexOf('Park Street') - Lines[endLine].indexOf(endStation));
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
