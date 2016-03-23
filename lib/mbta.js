'use strict';

const Lines = { Red: {
  'South Station': 1,
  'Park Street': 0,
  'Kendall': 1,
  'Central': 2,
  'Harvard': 3,
  'Porter': 4,
  'Davis': 5,
  'Alewife': 6
}, Blue: {
  'Government Center': 1,
  'Park Street': 0,
  'Boylston': 1,
  'Arlington': 2,
  'Copley': 3,
  'Hynes': 4,
  'Kenmore': 5
}, Orange: {
  'North Station': 2,
  'Haymarket': 1,
  'Park Street': 0,
  'State': 1,
  'Downtown Crossing': 2,
  'Chinatown': 3,
  'Back Bay': 4,
  'Forest Hills': 5
}};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  return Lines[startLine][startStation] + Lines[endLine][endStation];
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
