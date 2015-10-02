'use strict';


var lines= {
  'redLine' : ['southStation', 'parkStreet', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'greenLine' : ['governmentCenter', 'parkStreet', 'bolyston', 'arlington', 'copley', 'hynes', 'kenmore'],
  'orangeLine' : ['northStation', 'haymarket', 'parkStreet', 'state', 'downtownCrossing', 'chinatown', 'backBay', 'forestHills']
}


// Code here.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {
  if(startLine !== endLine){
    var part1 = Math.abs(lines[startLine].indexOf(startStation) - lines[startLine].indexOf('parkStreet'));
    var part2 = Math.abs(lines[endLine].indexOf('parkStreet') - lines[endLine].indexOf(endStation));
    return part1 + part2;
  }
  return Math.abs(lines[startLine].indexOf(startStation) - lines[endLine].indexOf(endStation));
};

// console.log(stopsBetweenStations('redLine', 'kendall', 'orangeLine', 'northStation'));

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
};
