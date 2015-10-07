'use strict';

var MBTA = {
  "Red Line" : ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  "Green Line" : ["Government Center", "Park Street", "Bolyston", "Arlington", "Copley", "Hynes", "Kenmore"],
  "Orange Line" : ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
  stopsBetweenStations : function stopsBetweenStations(startLine, startStation, endLine, endStation) {
    var getStopsTally;
    if (this.startLine !== this.endLine) {
      getStopsTally = Math.abs((this[startLine].indexOf(startStation) - this[startLine].indexOf("Park Street")) +
        (this[endLine].indexOf(endStation) - this[endLine].indexOf("Park Street")));
    } else {
      getStopsTally = Math.abs(this[startLine].indexOf(startStation) - this[endLine].indexOf(endStation));
    }
    return getStopsTally;
  }
}
MBTA.stopsBetweenStations("Red Line", "South Station", "Green Line", "Kenmore");

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
};
