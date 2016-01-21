'use strict';

// Code here.
const Red = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];
const Green = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
const Orange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

let linearStops = function linearStops(lineString, start, end){
  let line = eval(lineString);
  let stops = Math.abs(line.indexOf(start) - line.indexOf(end));
  return stops;
};

let stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {
  if (startLine === endLine){
    let stops = linearStops(startLine, startStation, endStation);
    return stops;
  }
  else{
    let leg1stops = linearStops(startLine, startStation, 'Park Street');
    let leg2stops = linearStops(endLine, 'Park Street', endStation);
    let totalStops = leg1stops + leg2stops;
    return totalStops;
  }
};

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
