'use strict';

// Code here.
const mbta = {
  'Red': ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis",
    "Alewife"
  ],
  'Green': ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
  'Orange': ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  return Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street')) +
    Math.abs(mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf('Park Street'));
};





module.exports = {
  stopsBetweenStations,
  stretch: false,
};
