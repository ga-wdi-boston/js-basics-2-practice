'use strict'
// stopsBetweenStations('red', 'Park Street', 'red', 'Harvard')
const subway = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let stops = 0
  const startPosition = subway[startLine].indexOf(startStation)
  const endPosition = subway[endLine].indexOf(endStation)
  // If the customer is not changing lines, just return the
  // distance between the two stations
  if (startLine === endLine) {
    stops = Math.abs(endPosition - startPosition)
  } else {
    const startIntersection = subway[startLine].indexOf('Park Street')
    const endIntersection = subway[endLine].indexOf('Park Street')
    stops = Math.abs(startPosition - startIntersection) + Math.abs(endPosition - endIntersection)
  }
  return stops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
