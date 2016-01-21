'use strict';

// Code here.
//- All 3 subway lines intersect at *'Park Street'*, but there are no other intersection points. Some of this MBTA is fictionalized.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {
  let lines = {
    Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    Green : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    Orange : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  };

  let startIndex = lines[startLine].indexOf(startStation);
  let endIndex = lines[endLine].indexOf(endStation);
  let startCross = lines[startLine].indexOf('Park Street');
  let endCross = lines[endLine].indexOf('Park Street');
  let totalCount = false;

  if(startLine === endLine){
    totalCount = startIndex - endIndex;
    return Math.abs(totalCount);

  } else if (startLine !== endLine) {
    let startDiff = startIndex - startCross;
    let endDiff = endIndex - endCross;
    let absStartDiff = Math.abs(startDiff);
    let absEndDiff = Math.abs(endDiff);

    totalCount = absStartDiff += absEndDiff;

    return Math.abs(totalCount);
  }
};

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
