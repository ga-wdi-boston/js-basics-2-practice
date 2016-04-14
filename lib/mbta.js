'use strict';

// Dictionary of line names with arrays representing each subway line.
const mbtaSystem = {
  'Red':
    ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall", "Park Street", "South Station"],
  'Green':
    ["Kenmore", "Hynes", "Copley", "Arlington", "Boylston", "Haymarket", "Park Street", "Government Center"],
  'Orange':
    ["Forest Hills", "Back Bay", "Chinatown", "Downtown Crossing", "State", "Haymarket", "Park Street", "North Station"]
};

// Returns the stop number of a station given the line name and the station name.
const stopNum = function(line,station) {
  return mbtaSystem[line].indexOf(station);
};

// Finds the stops between two stations on the same line.
const stopsNoXfr = function(line,stnA,stnB) {
  return Math.abs(stopNum(line,stnA) - stopNum(line,stnB));
};

// Returns an array of transfer points between lineA and line B
const getXfrs = function(lineA,lineB) {
  let xfrs = [];
  lineA = mbtaSystem[lineA];
  lineB = mbtaSystem[lineB];
  for (var i = 0; i < lineA.length; i++) {
    if (lineB.indexOf(lineA[i]) >= 0) {
      xfrs.push(lineA[i]);
    }
  }
  return xfrs;
};

// Find closest transfer point to a station
let closestXfr = function(lineA,stnA,lineB) {
  let xfrs = getXfrs(lineA,lineB);
  let minDist;
  let closeXfr;
  for (var i = 0; i < xfrs.length; i++) {
    let stnX = xfrs[i];
    let xfrDist = stopsNoXfr(lineA,stnA,stnX);
    if (!minDist || xfrDist < minDist) {
      minDist = xfrDist;
      closeXfr = stnX;
    }
  }
  return closeXfr;
};

// If start and end lines are the same, calls stopsNoXfr.
// If start and end lines are different sums the distance between each
// stop and Park Street on that line.
const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    return stopsNoXfr(startLine,startStation,endStation);
  } else {
    let xfrStn = closestXfr(startLine,startStation,endLine);
    return stopsNoXfr(startLine,startStation,xfrStn) + stopsNoXfr(endLine,xfrStn,endStation);
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
