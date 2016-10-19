'use strict';
const lines = {
  "Red" : ["South Station", "Park Street", "Kendall", "Central", "Harvard",
  "Porter", "Davis", "Alewife"],
  "Green" : ["Haymarket", "Government Center", "Park Street", "Boylston", "Arlington",
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

const checkHay = function(startLine, startStation, endLine, endStation) {
  if ((startLine === "Green" && endLine === "Orange") ||
  (startLine === "Orange" && endLine === "Green")) {
    return true;
  } else {
    return false;
  }
};

const diffLineDist = function(startLine, startStation, endLine, endStation) {
  let first = Math.abs((lines[startLine].indexOf(startStation)-
  lines[startLine].indexOf("Park Street")));
  let second = Math.abs((lines[endLine].indexOf("Park Street")-
  lines[endLine].indexOf(endStation)));
  let parkTrans = first + second;

  if (checkHay(startLine, startStation, endLine, endStation)) {
    let first2 = Math.abs((lines[startLine].indexOf(startStation)-
    lines[startLine].indexOf("Haymarket")));
    let second2 = Math.abs((lines[endLine].indexOf("Haymarket")-
    lines[endLine].indexOf(endStation)));
    let hayTrans = first2 + second2;
    if (hayTrans < parkTrans) {
      return hayTrans;
    }
  }

  return parkTrans;
};


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
