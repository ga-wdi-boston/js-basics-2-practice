'use strict';

// Code here.

const stopsBetweenStations =
function stopsBetweenStations(startLine, startStation, endLine, endStation) {

  let mbta = {
    'Red':    ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
                    'Porter', 'Davis', 'Alewife',],
    'Green':  ['Government Center', 'Park Street', 'Boylston', 'Arlington',
                    'Copley', 'Hynes', 'Kenmore',],
    'Orange': ['North Station', 'Haymarket', 'Park Street', 'State',
                    'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills',]
  };

  if (startLine === endLine)  {
    return stopsOnLine(mbta[startLine].indexOf(startStation),
                       mbta[endLine].indexOf(endStation));
  } else {
    return stopsOnLine(mbta[startLine].indexOf(startStation),
                       mbta[startLine].indexOf('Park Street')) +
           stopsOnLine(mbta[endLine].indexOf(endStation),
                       mbta[endLine].indexOf('Park Street'));
  }

};

const stopsOnLine = function stopsOnLine(sta1, sta2) {
  return Math.abs(sta1 - sta2);
};



module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
