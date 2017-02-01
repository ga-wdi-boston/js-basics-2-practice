'use strict';

// Code here.

//const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {};
// YOU DONT TELL ME WHAT TO DO! ^^^^


//countStop evaluates the amount of stop we will take for our commute
const countStop = (firstStop + secondStop)

const subwayLines = {
   Red: ['South Station' , 'Park Street' , 'Kendall' , 'Central' , 'Harvard' , 'Porter' , 'Davis' , 'Alewife'],
   Green: ['Government Center' , 'Park Street' , 'Boylston' , 'Arlington' , 'Copley' , 'Hynes' , 'Kenmore'],
   Orange: ['North Station', 'Haymarket', 'Park Street' , 'State' , 'Downtown Crossing' , 'Chinatown' , 'Back Bay' , 'Forest Hills']
};

//Red Values Below
const redPark = subwayLines.Red.indexOf('Park Street');
let redStation = subwayLines.Red.indexOf(startStation);

//redLine = number of stops from 'Park Street'
let redLine = function() {
  if (redStation < redPark ) {
    return (redPark - redStation);
  } else {
    return (redStation - redPark);
  }
}

//Green Values Below
const greenPark = subwayLines.Green.indexOf('Park Street');
let greenStation = subwayLines.Green.indexOf(startStation);

//greenLine = number of stops from 'Park Street'
let greenLine = function() {
  if (greenStation < greenPark ) {
    return (greenPark - greenStation);
  } else {
    return (greenStation - greenPark);
  }
}

//Orange Values Below
const orangePark = subwayLines.Orange.indexOf('Park Street');
let orangeStation = subwayLines.Orange.indexOf(startStation);

//orangeLine = number of stops from 'Park Street'
let orangeLine = function() {
  if (orangeStation < orangePark ) {
    return (orangePark - orangeStation);
  } else {
    return (orangeStation - orangePark);
  }
}


// This function defines number of stops for startLine and startStation
let firstStop = function(startLine, startStation) {
    if (startLine === subwayLines['Red']) {
        firstStop = redLine;
    } else if {
      (startLine === subwayLines['Green']) {
        firstStop = greenLine;
      } else {
        firstStop = orangeLine;
      }
    }
}

// This function defines number of stops for endLine and endStation
let secondStop = function(endLine, endStation) {
    if (endLine === subwayLines['Red']) {
        secondStop = redLine;
    } else if {
      (endLine === subwayLines['Green']) {
        secondStop = greenLine;
      } else {
        secondStop = orangeLine;
      }
    }
}


// console.log(subwayLines.Red[4]) = Harvard


module.exports = {
  stopsBetweenStations,
  stretch: false,
};
