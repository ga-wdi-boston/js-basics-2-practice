'use strict'

// stopsBetweenStations('Orange', 'North Station', 'Green', 'Boylston') === 3
// stopsBetweenStations('Red', 'South Station', 'Orange', 'North Station') === 3
// stopsBetweenStations('Red', 'South Station', 'Green', 'Boylston') === 2
// stopsBetweenStations('Red', 'Alewife', 'Orange', 'Forest Hills') === 11

const mbta = {
  'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'Green': ['Haymarket', 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let numStops

  if (startLine === endLine) {
    // if both stops are on the same line
    numStops = howFar(startLine, startStation, endStation)
  } else {
    // if either stop is on Red, has to go through Park
    if (startLine === 'Red' || endLine === 'Red') {
      // only go through Park Street
      numStops =
        howFar(startLine, startStation, 'Park Street') +
        howFar(endLine, endStation, 'Park Street')
    } else {
      // which is better, going through Haymarket or Park Street?
      const parkStops =
        howFar(startLine, startStation, 'Park Street') +
        howFar(endLine, endStation, 'Park Street')
      const haymarketStops =
        howFar(startLine, startStation, 'Haymarket') +
        howFar(endLine, endStation, 'Haymarket')
      numStops = Math.min(parkStops, haymarketStops)
    }
  }

  return numStops
}

const howFar = (line, startStation, endStation) => {
  return Math.abs(
    mbta[line].indexOf(startStation) -
    mbta[line].indexOf(endStation)
  )
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
