'use strict'

const mbta = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStationsRed = function(startStation, endStation){
  const startIndex = mbta.red.indexOf(startStation)
  const endIndex = mbta.red.indexOf(endStation)
  const numberStops = Math.abs(startIndex - endIndex)

  return numberStops
}

const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
  if (startLine === endLine) {
    const startIndex = mbta[startLine].indexOf(startStation)
    const endIndex = mbta[endLine].indexOf(endStation)
    const numberStops = Math.abs(startIndex - endIndex)
    return numberStops
  } else {
    const startIndex = mbta[startLine].indexOf(startStation)
    const parkStreetStartIndex = mbta[startLine].indexOf('Park Street')
    const numberStopsStartLine = Math.abs(startIndex - parkStreetStartIndex)
    const endIndex = mbta[endLine].indexOf(endStation)
    const parkStreetEndIndex = mbta[endLine].indexOf('Park Street')
    const numberStopsEndLine = Math.abs(endIndex - parkStreetEndIndex)
    return numberStopsStartLine + numberStopsEndLine
  }
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
