'use strict'

const subway = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  const startPosition = subway[startLine].indexOf(startStation)
  const endPosition = subway[endLine].indexOf(endStation)
  const startIntersection = subway[startLine].indexOf('Park Street')
  const endIntersection = subway[endLine].indexOf('Park Street')

  return Math.abs(startPosition - startIntersection) + Math.abs(endPosition - endIntersection)
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
