'use strict'

const mbta = {
  'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let numStops

  if (startLine === endLine) {
    // if both stops are on the same line
    numStops =
      // distance between stops
      Math.abs(mbta[startLine].indexOf(startStation) -
      mbta[endLine].indexOf(endStation))
  } else {
    // if both stops are on different lines
    numStops =
      // distance from startStation to Park Street
      Math.abs(mbta[startLine].indexOf(startStation) -
        mbta[startLine].indexOf('Park Street')) +
      // distance from change at Park Street to endStation
      Math.abs(mbta[endLine].indexOf(endStation) -
        mbta[endLine].indexOf('Park Street'))
  }

  return numStops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
