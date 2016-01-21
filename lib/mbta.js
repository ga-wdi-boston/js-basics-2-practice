'use strict';

let mbta = { 'Red Line': ['South Station', 'Park Street', 'Kendall', 'Central',
                          'Harvard', 'Porter', 'Davis', 'Alewife'],
             'Green Line': ['Government Center', 'Park Street', 'Boylston',
                            'Arlington', 'Copley', 'Hynes', 'Kenmore'],
            'Orange Line': ['North Station', 'Haymarket', 'Park Street',
                            'State', 'Downtown Crossing', 'Chinatown',
                            'Back Bay', 'Forest Hills'],
            'Intersection': ['Park Street'] };

/* My train of thought:
1. Figure out function for if staying on the same line
2. Figure out the else, for when the person needs to transfer at park Street
1 and 2 are a big if statement

To start 1
get index numbers of startStation and endStation, then
subtract. If negative, then multiply by -1 to change it to positive.
my code didn't work, grunt nag tells me that mbta[startLine].length is undefined
Is it because of startLine?? I tried to make a super long if statement replacing
'startLine' with the actual properties 'Red Line', 'Green Line', etc. But that
didn't work.

Step 2??? IDK, I'm tired and step 1 never worked */

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {

//Figure out the index number of startStation and endStation

function getStartStationIndex(startStation) {

  for (var i = 0; i < mbta[startLine].length; i++) {
      if (startStation === mbta[startLine][i]) {
      return i;
    }

}

}


function getEndStationIndex(endStation) {

  for (var i = 0; i < mbta[endLine].length; i++) {
    if (endStation === mbta[endLine][i]) {
      return i;
    }

}

// if staying on the same line
// function for number of stops
let startStationIndex = getStartStationIndex(startStation);
let endStationIndex = getEndStationIndex(endStation);

function numberOfStops(endStationIndex, startStationIndex) {

  if (endStationIndex - startStationIndex < 0) {
    return (endStationIndex - startStationIndex) * (-1);
  } else {
    return endStationIndex - startStationIndex;
  }

}

if (startLine === endLine) {
  return numberOfStops(endStationIndex, startStationIndex);

} else { // start of code if NOT on the same line

}

}

}; // end function stopsBetweenStations

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
