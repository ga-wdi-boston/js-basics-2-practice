'use strict';

// Code here.
let lines = {
'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
  'Porter', 'Davis', 'Alewife'],
'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington',
  'Copley', 'Hynes', 'Kenmore'],
'Orange': ['North Station', 'Haymarket', 'Park Street', 'State',
  'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
    if(startLine === endLine) {
      return Math.abs(lines[startLine].indexOf(startStation) - lines[endLine].indexOf(endStation));
    } else {
      let startTransfer = Math.abs(lines[startLine].indexOf(startStation) - lines[startLine].indexOf('Park Street'));
      let endTransfer = Math.abs(lines[endLine].indexOf('Park Street') - lines[endLine].indexOf(endStation));
      return startTransfer + endTransfer;
    }
};




module.exports = {
  stopsBetweenStations,
  stretch: false,
};
