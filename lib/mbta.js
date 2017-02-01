'use strict';

const mbtaLines = {
  Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
  'Porter', 'Davis', 'Alewife'],
  Green : ['Kenmore', 'Hynes', 'Copley', 'Arlington', 'Boylston',
  'Park Street', 'Government Center'],
  Orange : ['Forest Hills', 'Back Bay', 'Chinatown', 'Downtown Crossing',
  'State', 'Park Street', 'Haymarket', 'North Station']
};

const hub = 'Park Street';

let stopsBetweenHub = function(array, value) {
  let stops = array.indexOf(value) - array.indexOf(hub);
  return Math.abs(stops);
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let totalStops = stopsBetweenHub(mbtaLines[startLine], startStation) +
  stopsBetweenHub(mbtaLines[endLine], endStation);
  return totalStops;
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
