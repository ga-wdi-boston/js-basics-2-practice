'use strict';

// Code here.
let lines = {
red:['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
green:['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
orange:['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],

};
let parkStreet = {
  red: 1,
  green: 1,
  orange: 2,
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let startStopNum;
  let endStopNum;
  console.log(startLine)
  console.log(endLine)
    for (let i = 0; i < lines[startLine].length; i++) {
      if (lines[startLine][i] === startStation) {
        startStopNum = i;
      }

    }
    for (let i = 0; i < lines[endLine].length; i++) {
      if (lines[endLine][i] === endStation) {
        endStopNum = i;
      }

    }
    return Math.abs(endStopNum - startStopNum);
}

  if (lines[startLine]) !== (lines[endLine]) {
      return ((Math.abs(startStopNum - parkStreet.index)) + (Math.abs(parkStreet.index - endStopNum)));
    }

};
console.log(stopsBetweenStations('startLine', 'startStation', 'endLine', 'startStation'));
module.exports = {
  stopsBetweenStations,
  stretch: false,
};
