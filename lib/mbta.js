'use strict'

// Code here.
const subLines = {
  'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
    'Porter', 'Davis', 'Alewife'],
  'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington',
    'Copley', 'Hynes', 'Kenmore'],
  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State',
    'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let startingIndex = subLines[startLine].indexOf(startStation)
  let endingIndex = subLines[endLine].indexOf(endStation)
  let numOfStartingStops = Math.abs(startingIndex - subLines[startLine].indexOf('Park Street'))
  let numOfEndigStops = Math.abs(endingIndex - subLines[endLine].indexOf('Park Street'))

  return numOfEndigStops + numOfStartingStops
}
module.exports = {
  stopsBetweenStations,
  stretch: false
}
