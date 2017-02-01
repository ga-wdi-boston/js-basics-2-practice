'use strict';

// Code here.

let redLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];
let greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let stops = null;
  if (startLine === endLine)
    {
        stops = startLine.indexOf(startStation) - startLine.indexOf(endStation);
          stops = Math.abs(stops);
        return stops;
    }
  else
    {
        let startLineStops = 0;
        let endLineStops = 0;
        startLineStops = (startLine.indexOf(startStation) - startLine.indexOf('Park Street'));
          startLineStops = Math.abs(startLineStops);
        endLineStops = (endLine.indexOf('Park Street') - endLine.indexOf(endStation));
          endLineStops = Math.abs(endLineStops);
        stops = startLineStops + endLineStops;
        return stops;
    }
};




module.exports = {
  stopsBetweenStations,
  stretch: false,
};
