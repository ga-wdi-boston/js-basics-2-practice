'use strict';

// Code here.


const stopsBetweenStations =
function stopsBetweenStations(startLine, startStation, endLine, endStation) {

  // declare the mbts lines and stations in an object
  let mbta = {
    'Red':    ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
                'Porter', 'Davis', 'Alewife',],
    'Green':  ['Haymarket', 'Government Center', 'Park Street', 'Boylston',
                'Arlington', 'Copley', 'Hynes', 'Kenmore',],
	  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State',
                'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills',]
  };

// if rider is not switching lines, return number of stops between stations
if (startLine === endLine)  {

    return stopsOnLine(mbta[startLine].indexOf(startStation),
                       mbta[endLine].indexOf(endStation));

// When there are lines with two junctions, compare distance using each junction
// and return the faster route
} else if (startLine === 'Green' && endLine === 'Orange' ||
           startLine === 'Orange' && endLine === 'Green') {

    // sets parkRoute equal to the # of stops using Park Street
    let parkRoute = stopsOnLine(mbta[startLine].indexOf(startStation),
                        mbta[startLine].indexOf('Park Street')) +
                      stopsOnLine(mbta[endLine].indexOf(endStation),
                        mbta[endLine].indexOf('Park Street'));

    // sets hayRoute equal to the # of stops using Haymarket
    let hayRoute = stopsOnLine(mbta[startLine].indexOf(startStation),
                        mbta[startLine].indexOf('Haymarket')) +
                      stopsOnLine(mbta[endLine].indexOf(endStation),
                        mbta[endLine].indexOf('Haymarket'));

    // returns the faster route number
    if (parkRoute <= hayRoute) { return parkRoute }
    else { return hayRoute }

// otherwise, return stops between start station and junction, and
// stops between end station and junction
} else {

    return stopsOnLine(mbta[startLine].indexOf(startStation),
                       mbta[startLine].indexOf('Park Street')) +
           stopsOnLine(mbta[endLine].indexOf(endStation),
                       mbta[endLine].indexOf('Park Street'));
  }

};

// function to determine stops taken on a single line
const stopsOnLine = function stopsOnLine(sta1, sta2) {
  return Math.abs(sta1 - sta2);
};



module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
