'use strict';

// Code here.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {

  let subway = {'Red' : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
                'Green' : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Coply', 'Hynes', 'Kenmore'],
                'Orange' : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
              };
    // Finds index of start station.
  let start = subway[startLine].indexOf(startStation);
   // Finds index of end station.
  let end = subway[endLine].indexOf(endStation);
  // If start lines and end lines are different.
  if (subway[startLine] !== subway[endLine]) {
    let parkstart = subway[startLine].indexOf('Park Street');  // Finds 'Park Street' of start line.
    let parkend = subway[endLine].indexOf('Park Street');      // Finds 'Park Street' of end line.
    let totalStop = Math.abs(start - parkstart) + Math.abs(end - parkend);  // Finds sum of Distance to Park from start station,
                                                                            // and Distance to Park on from end station.

    return totalStop;
  // Finds totalStop when start line and end line are the same.
  } else {
    let totalStop = Math.abs(start - end);
    return totalStop;
  }

};

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
