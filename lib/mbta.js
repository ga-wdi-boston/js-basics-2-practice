'use strict';

// Code here.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {
  var stations = {
    'Red' : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'Green' : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    'Orange' : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']};

    var firstLeg = Math.abs(stations[startLine].indexOf(startStation) - stations[startLine].indexOf('Park Street') );
    var secondLeg = Math.abs(stations[endLine].indexOf(endStation) - stations[endLine].indexOf('Park Street') );
    return firstLeg + secondLeg;
  }



module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
