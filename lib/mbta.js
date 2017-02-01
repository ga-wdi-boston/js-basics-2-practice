'use strict';

// Code here.

// stopsBetweenStations('Red Line', 'South Station', 'Red Line', 'Alewife')
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let mbtaStops = {
      'Red': [
        'South Station',
        'Park Street',
        'Kendall',
        'Central',
        'Harvard',
        'Porter',
        'Davis',
        'Alewife'
      ],
      'Green': [
        'Government Center',
        'Park Street',
        'Boylston',
        'Arlington',
        'Copley',
        'Hynes',
        'Kenmore'
      ],
      'Orange': [
        'North Station',
        'Haymarket',
        'Park Street',
        'State',
        'Downtown Crossing',
        'Chinatown',
        'Back Bay',
        'Forest Hills'
      ]
  };

  // scenario where we are on the same line simple subtraction
  // scenario where we are on different lines
  // // we have park street connection to account for with addition of stops for end Station
  // if lines same this else that

  if (startLine === endLine) {
    let start = mbtaStops[startLine].indexOf(startStation);
    let stop = mbtaStops[endLine].indexOf(endStation);
    return Math.abs(stop - start)
  } else {
    let start = mbtaStops[startLine].indexOf(startStation);
    let stop = mbtaStops[endLine].indexOf(endStation);

    let startPark = mbtaStops[startLine].indexOf('Park Street');
    let stopPark = mbtaStops[endLine].indexOf('Park Street');
    return Math.abs((stopPark-stop)-(startPark-start));

  }

};



// stopsBetweenStations('Red line', 'South Station', 'Orange Line', 'Chinatown')
module.exports = {
  stopsBetweenStations,
  stretch: false,
};
