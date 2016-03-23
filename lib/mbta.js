'use strict';

const Lines = {
  'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Black Bay', 'Forest Hills']
};

const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    return Math.abs(Lines[startLine].indexOf(startStation) - Lines[endLine].indexOf(endStation));
  } else {
    return Math.abs(Lines[startLine].indexOf('Park Street') - Lines[startLine].indexOf(startStation)) + Math.abs(Lines[endLine].indexOf('Park Street') - Lines[endLine].indexOf(endStation));
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
