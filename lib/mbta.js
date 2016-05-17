'use strict';

// Code here.

let redLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];

let greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];

let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

let lineNames = {
  'Red': redLine,
  'Green': greenLine,
  'Orange': orangeLine
};
const stopsBetweenStations =
(startLine, startStation, endLine, endStation) => {
  if(startLine === endLine) {
  let answer = (Math.abs(lineNames[endLine].indexOf(endStation)) - Math.abs(lineNames[startLine].indexOf(startStation)));
  return answer;
} else {
  let answer = (Math.abs(lineNames[endLine].indexOf(endStation)) -
  Math.abs(lineNames[endLine].indexOf('Park Street'))) + (Math.abs(lineNames[startLine].indexOf(startStation) -
  Math.abs(lineNames[startLine].indexOf('Park Street'))));
  return answer;
}
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};

/*The Red line has the following stops: South Station, Park Street, Kendall,
/*Central, Harvard, Porter, Davis, Alewife The Green line has the following
/*stops: Government Center, Park Street, Boylston, Arlington, Copley, Hynes,
/*Kenmore The Orange line has the following stops: North Station, Haymarket,
/*Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills All 3
/*subway lines intersect at Park Street, but there are no other intersection
/*points. Some of this MBTA is fictionalized. */
