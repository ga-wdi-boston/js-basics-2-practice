'use strict';

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  let Subway = {
  "Red Line": ["South Station", "Park Street", "Kendall", "Central", "Haymarket", "Porter", "Davis", "Alewife"],
  "Green Line": ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
  "Orange Line": ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]

}

if (startLine = endLine){
  var a = Subway[startLine].indexOf(startStation);
  var b = Subway[startLine].indexOf(endStation);
  var c = abs(a-b);
  return c;
}

else{

  var a = abs(Subway[startLine].indexOf("Park Station") - Subway[startLine].indexOf(startStation));
  var b = abs(Subway[startLine].indexOf("Park Station") - Subway[startLine].indexOf(endStation));
  var c = a + b;
  return c;
}

  };


module.exports = {
  stopsBetweenStations,
  stretch: false,
};
