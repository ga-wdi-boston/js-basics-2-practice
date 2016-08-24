'use strict';

// Code here.
let subwayStops = {
  'Red': ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter",
  "Davis", "Alewife"],
  'Green': ["Government Center", "Park Street", "Boylston", "Arlington", "Copley",
  "Hynes", "Kenmore"],
  'Orange': ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing",
  "Chinatown", "Back Bay", "Forest Hills"]
};

//return the number of stops between a given station and Park Street for
// the given list of line stops.
const parkStops = (lineStops, stopIndex) => {

  let count = 0;

  // get the index of park street from the list of that line's stops
  let parkStreetIndex = lineStops.indexOf("Park Street");

  // if the stop station is after park street, start at Park and
  // count until you hit the goal station
  if (parkStreetIndex < stopIndex) {
    for (let i = parkStreetIndex; i < stopIndex; i++) {
      count++;
    }
  } else {
    // otherwise, if the stop station is before park, start at the stop station
    // and count until you hit park
    for (let i = stopIndex; i < lineStops.length; i++) {
      if (lineStops[i] === "Park Street") {
        return count;
      } else {
        count++;
      }
    }
  }
  return count;
};

// return the total number of stops from the starting line station to
// the endling line station.
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  // collect the array of stops for starting line and end line
  let startLineStops = subwayStops[startLine];
  let endLineStops = subwayStops[endLine];

  // store station number (index) of the starting station and ending station
  let startStationIndex = startLineStops.indexOf(startStation);
  let endStationIndex = endLineStops.indexOf(endStation);

  // set number of stops to 0
  let stopCount = 0;

  // if the we're only travelling on one line, set stopCount equal to
  // the number of stops between the start and end stop.
  if (startLine === endLine) {
    // if we're starting at the end of the line, count from end station index to start station index
    // otherwise, start counting from the start index to the end station index
    // each loop, increment stopCount by one
    if (startStationIndex > endStationIndex) {
      for (let i = endStationIndex; i < startStationIndex; i++) {
        stopCount++;
      }
    } else {
    for (let i = startStationIndex; i < endStationIndex; i++) {
      stopCount++;
      }
    }
    // if they're on different lines, set toPark to be the number of stops b/w
    // the start station and Park Street, and fromPark the number of stops b/w
    // Park Street and the end station.
    // set the stopCount equal to the total of those two numbers.
  } else {
    let toPark = parkStops(startLineStops, startStationIndex);
    let fromPark = parkStops(endLineStops, endStationIndex);
    stopCount = toPark + fromPark;
  }
  console.log("The distance from " + startStation + " to " + endStation + " is: " + stopCount);
  return stopCount;
};


module.exports = {
  stopsBetweenStations,
  stretch: false,
};
