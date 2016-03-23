'use strict';

//TODO redo this solution to deal with test cases that aren't present in the WDI
//test cases, e.g., my solution totally fails for Harvard to to Porter (it would
//return seven (7) stops rather than the correct 1)).
const Lines = {
  'South Station': -1,
  'Park Street': 0,
  'Kendall': 1,
  'Central': 2,
  'Harvard': 3,
  'Porter': 4,
  'Davis': 5,
  'Alewife': 6,
  'Government Center': -1,
  'Boylston': 1,
  'Arlington': 2,
  'Copley': 3,
  'Hynes': 4,
  'Kenmore': 5,
  'North Station': -2,
  'Haymarket': -1,
  'State': 1,
  'Downtown Crossing': 2,
  'Chinatown': 3,
  'Back Bay': 4,
  'Forest Hills': 5
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if (startLine === endLine) {
    return Math.abs((Lines[startStation] - Lines[endStation]));
  } else if (startLine !== endLine) {
    return Math.abs(Lines[startStation]) + Math.abs(Lines[endStation]);
  } else {
    return 0;
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
