'use strict';
const lines = {
  "Red" : ["South Station", "Park Street", "Kendall", "Central", "Harvard",
  "Porter", "Davis", "Alewife"],
  "Green" : ["Government Center", "Park Street", "Boylston", "Arlington",
  "Copley", "Hynes", "Kenmore"],
  "Orange" : ["North Station", "Haymarket", "Park Street", "State",
  "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};

const checkSameLine = function(startLine, endLine) {
  if (startLine === endLine) {
    return true;
  } else {
    return false;
  }
};

const sameLineDist = function(startLine, startStation, endStation) {
  return Math.abs(lines[startLine].indexOf(startStation)-
  lines[startLine].indexOf(endStation));
};

const diffLineDist = function(startLine, startStation, endLine, endStation) {
  let first = Math.abs((lines[startLine].indexOf(startStation)-
  lines[startLine].indexOf("Park Street")));
  let second = Math.abs((lines[endLine].indexOf("Park Street")-
  lines[endLine].indexOf(endStation)));
  return first + second;
}


const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if (checkSameLine(startLine, endLine) === false) {
    return diffLineDist(startLine, startStation, endLine, endStation);
  } else {
    return sameLineDist(startLine, startStation, endStation);
  }
};



module.exports = {
  stopsBetweenStations,
  stretch: false,
};
