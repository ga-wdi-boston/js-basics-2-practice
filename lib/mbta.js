'use strict';


var lines= {
  'Red' : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'Green' : ['Government Center', 'Park Street', 'Bolyston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  'Orange' : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}


// Code here.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {
  if(startLine !== endLine){
    var part1 = Math.abs(lines[startLine].indexOf(startStation) - lines[startLine].indexOf('Park Street'));
    var part2 = Math.abs(lines[endLine].indexOf('Park Street') - lines[endLine].indexOf(endStation));
    return part1 + part2;
  }
  return Math.abs(lines[startLine].indexOf(startStation) - lines[endLine].indexOf(endStation));
};

//console.log(stopsBetweenStations('Red', 'Davis', 'Orange', 'Chinatown'));

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
};
