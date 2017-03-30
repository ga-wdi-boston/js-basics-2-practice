'use strict'

const mbta = {
  Red: [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ],
  Green: [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ],
  Orange: [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills'
  ]
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let numStops = 0
  if (startLine === endLine) {
    Math.abs(mbta[startLine].indexOf(startStation) -
   mbta[endLine].indexOf(endStation))
  } else {
    numStops =
   Math.abs(mbta[startLine].indexOf(startStation) -
   mbta[startLine].indexOf('Park Street')) +
   Math.abs(mbta[endLine].indexOf(endStation) -
   mbta[endLine].indexOf('Park Street'))
  }
  return numStops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
