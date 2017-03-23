'use strict'

/*
Create a function in lib/mbta.js to calculaste the number of stops between stations on the "MBTA".
Write additional functions used by this function as needed.

The function takes the line and stop that a rider is getting on at and the line and stop that a rider
is getting off at and returns the total number of stops for the trip.
There are 3 subway lines:

All 3 subway lines intersect at Park Street, but there are no other intersection points. Some of this MBTA is
fictionalized.
*/

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  //stops.orange.indexOf('Back Bay')
  let station2 = stops.endLine.indexOf(endStation)
  let station1 = stops.startLine.indexOf(startStation)
  return abs(station2 - station1)
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}

let stops = {
  red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter",
  "Davis", "Alewife"],
  green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley",
"Hynes", "Kenmore"],
orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing",
"Chinatown", "Back Bay", "Forest Hills"]
}



/*let no_stops = function(line, station1, station2) {
  console.log("Start Station is "line[station1])
  console.log("End Station is "line[station2])
  return line.station2 - line.station1
}
