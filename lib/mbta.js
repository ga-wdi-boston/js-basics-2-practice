'use strict';

// Code here.
let redLineStops;
let greenLineStops;
let orangeLineStops;
let mbta;
let startIndex;
let endIndex;
let startToPark;
let parkToEnd;
let numberOfStops;

//All line stops in arrays
redLineStops = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"];
greenLineStops = ["Government Center", "Park Street", "Bolyston", "Arlington", "Copley", "Hynes", "Kenmore"];
orangeLineStops = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay","Forest Hills"];

//Store all lines and stops on lines as an Object
mbta = {
  redLine: redLineStops,
  greenLine: greenLineStops,
  orangeLine: orangeLineStops
};

//Function to calculate number of stops between stations
const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
  startIndex = mbta[startLine].indexOf(startStation);
  //check if hop onto different line
  if (startLine === endLine && startStation !== endStation){
    endIndex = mbta[startLine].indexOf(endStation);
    numberOfStops = Math.abs(startIndex - endIndex);
    return numberOfStops
  } else if (startLine !== endLine){
    startToPark = Math.abs(startIndex - mbta[startLine].indexOf("Park Street"));
    parkToEnd = Math.abs(mbta[endLine].indexOf("Park Street")-mbta[endLine].indexOf(endStation));
    numberOfStops = startToPark + parkToEnd;
    return numberOfStops
  } else {
    console.log('Hmmm, somethings wrong with your journey');
  }

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
