'use strict'

// Code here.
const subwayLines = {
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

const countStops = function (line, startStation, endStation) {
  let stops = line.indexOf(startStation) - line.indexOf(endStation)
  console.log(stops)
  if (stops < 0) {
    stops = -stops
  }
  return stops
}
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let stops = 0
  if (startLine === endLine) {
    stops = countStops(subwayLines[startLine], startStation, endStation)
  } else {
    stops = countStops(subwayLines[startLine], startStation, 'Park Street') +
    countStops(subwayLines[endLine], endStation, 'Park Street')
  }
  return stops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
