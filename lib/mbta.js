'use strict';

// Code here.
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

// I've written this function to calculate only the stations BETWEEN start and
// ends stops. That means non-inclusive (the instructions seem to be worded this 
// way). However, changing the code to be inclusive would just require changing
// the -1 at line 26 to a 1 in order to include start and end stations.
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let totalStops = stopsBetweenHub(mbtaLines[startLine], startStation) +
  stopsBetweenHub(mbtaLines[endLine], endStation) - 1;
  return totalStops;
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
