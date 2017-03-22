'use strict'

// Code here.
// const subway = {
//   red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
//   green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
//   orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
// }

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  const subway = {
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  }

  if (startLine === endLine) {
    const startPosition = subway[startLine].indexOf(startStation)
    const endPosition = subway[endLine].indexOf(endStation)
    const numStops = Math.abs(endPosition - startPosition)
    return numStops
  } else {
    // (start to intersection) + (intersection to end)
    const startPosition = subway[startLine].indexOf(startStation)
    const endPosition = subway[endLine].indexOf(endStation)
    const startIntersection = subway[startLine].indexOf('Park Street')
    const endIntersection = subway[endLine].indexOf('Park Street')
    const numStops = Math.abs(startPosition - startIntersection) + Math.abs(endPosition - endIntersection)
    return numStops
  }
}

// stopsBetweenStations('Red', 'South Station', 'Red', 'Harvard')
// stopsBetweenStations('green', 'Kenmore', 'red', 'Harvard')
// stopsBetweenStations('green', 'Kenmore', 'orange', 'Forest Hills')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
