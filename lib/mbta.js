'use strict';

// Code here.
let lines = {
  Red:['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green:['Government', 'Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange:['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

let parkStIndexes = {
  Red: 1,
  Green: 2,
  Orange: 2
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let beginIndex;
  let endIndex;

    // start stop index
    for (let i = 0; i < lines[startLine].length; i++) {
      // if current stop iteration is equal to the requested start station
      if (lines[startLine][i] === startStation) {
        beginIndex = i; // save the iteration (stop)
      }
    }

    // end stop index
    for (let i = 0; i < lines[endLine].length; i++) {
      // if current stop iteration is equal to the requested stop station
      if (lines[endLine][i] === endStation) {
        endIndex = i;
      }
    }

    // if traveling one line...
    if (startLine === endLine) {
      // just do the quick math
      return Math.abs(endIndex - beginIndex);
    } else {
      // Multiple lines being traveled...
      let beginParkStIndex = parkStIndexes[startLine]; // Where is Park St. on this starting line?
      let endParkStIndex = parkStIndexes[endLine]; // Where is Park St. on the ending line?
      let lineOneTotalStops =  Math.abs(beginIndex - beginParkStIndex);
      let lineTwoTotalStops = Math.abs(endParkStIndex - endIndex);
      let totalStops = lineOneTotalStops + lineTwoTotalStops;
      // console.log(lineOneTotalStops);
      // console.log(lineTwoTotalStops);
      // console.log(totalStops);
      return totalStops;
    }

};
// stopsBetweenStations('Green', 'Copley', 'Orange', 'Back Bay');
console.log('total stops: ', stopsBetweenStations('Red', 'Harvard', 'Green', 'Copley'));

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
