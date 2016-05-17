'use strict';

// Code here.

let redLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];

let greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];

let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

let lineNames = {
  'Red Line ': redLine,
  'Green Line': greenLine,
  'Orange Line': orangeLine
}
const stopsBetweenStations =
(startLine, startStation, endLine, endStation) => {
  startLine = lineNames[startLine]; //these are calling the array itself and not the array name. boo.
  endLine = lineNames[endLine];
  if(startLine === endLine) {
  let answer = (Math.abs(endLine.indexOf(endStation)) - Math.abs(startLine.indexOf(startStation)));
  return answer;
} else {
  let answer = (Math.abs(endLine.indexOf(endStation)) -
  Math.abs(endLine.indexOf('Park Street'))) + (Math.abs(startLine.indexOf(startStation) -
  Math.abs(startLine.indexOf('Park Street'))));
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
