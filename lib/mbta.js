'use strict';

// Code here.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {};

let subway = {'redline' : ['south station', 'park street', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
              'greenline' : ['government center', 'park street', 'boylston', 'arlington', 'coply', 'hynes', 'kenmore'],
              'orangeline' : ['north station', 'haymarket', 'park street', 'state', 'downtown crossing', 'chinatown']};
let start = subway[startLine].indexOf(startStation);
let end = subway[endline].indexOf(endStation);


module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
