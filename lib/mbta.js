'use strict';

// Code here.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {

  let subway = {'Red' : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
                'Green' : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Coply', 'Hynes', 'Kenmore'],
                'Orange' : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
              };

  let start = subway[startLine].indexOf(startStation);
  let end = subway[endLine].indexOf(endStation);

  if (subway[startLine] !== subway[endLine]) {
    let parkstart = subway[startLine].indexOf('Park Street');
    let parkend = subway[endLine].indexOf('Park Street');
    let totalStop = Math.abs(start - parkstart) + Math.abs(end - parkend);

    return totalStop;

  } else {
    let totalStop = Math.abs(start - end);
    return totalStop;
  }

};

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
